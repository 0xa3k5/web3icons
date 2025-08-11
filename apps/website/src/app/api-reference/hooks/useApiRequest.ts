import { useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export interface ApiResponse {
  status: number
  data: any
  error?: string
}

export function useApiRequest() {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<ApiResponse | null>(null)

  const makeRequest = async (
    endpoint: string,
    method: string = 'GET',
    apiKey?: string,
    body?: any,
    allParams?: Record<string, string>,
    endpointInputs?: any[],
  ) => {
    setLoading(true)
    setResponse(null)

    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      }

      if (apiKey && endpoint.startsWith('/v1/')) {
        headers['X-API-Key'] = apiKey
      }

      const config: RequestInit = {
        method,
        headers,
      }

      if (body) {
        config.body = JSON.stringify(body)
      }

      // Process parameters - separate path and query params
      let url = `${API_URL}${endpoint}`
      const queryParams: Record<string, string> = {}

      if (allParams) {
        Object.entries(allParams).forEach(([key, value]) => {
          if (value) {
            // Check if this is a path parameter
            const input = endpointInputs?.find((inp) => inp.name === key)
            if (input?.in === 'path') {
              // Replace path parameter in URL
              url = url.replace(`{${key}}`, encodeURIComponent(value))
            } else {
              // Add as query parameter
              queryParams[key] = value
            }
          }
        })
      }

      // Add query parameters to URL
      if (Object.keys(queryParams).length > 0) {
        const params = new URLSearchParams()
        Object.entries(queryParams).forEach(([key, value]) => {
          params.append(key, value)
        })
        const queryString = params.toString()
        if (queryString) {
          url += `?${queryString}`
        }
      }

      const res = await fetch(url, config)
      const data = await res.json()

      setResponse({
        status: res.status,
        data: data,
      })
    } catch (error) {
      setResponse({
        status: 500,
        data: null,
        error: error instanceof Error ? error.message : 'unknown error',
      })
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    response,
    makeRequest,
  }
}
