import { useState, useEffect } from 'react'
import { IEndpoint } from '../../../utils/open-api-parser'

interface UseExampleResponseProps {
  endpoint: IEndpoint
}

export function useExampleResponse({ endpoint }: UseExampleResponseProps) {
  const [exampleResponse, setExampleResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchExampleResponse = async () => {
      if (
        !endpoint.defaultQueryParams ||
        Object.keys(endpoint.defaultQueryParams).length === 0
      ) {
        return
      }

      setLoading(true)
      const API_URL = process.env.NEXT_PUBLIC_API_URL
      try {
        let url = endpoint.pathExample || endpoint.endpoint
        const queryString = Object.entries(endpoint.defaultQueryParams)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
          )
          .join('&')

        const fullUrl = `${API_URL}${url}${queryString ? `?${queryString}` : ''}`

        const headers: Record<string, string> = {}

        // For endpoints that require auth, we'll skip the real request
        // and use a placeholder response showing auth is needed
        if (endpoint.requiresAuth) {
          setExampleResponse({
            error:
              'Authentication required - add your API key to see real results',
          })
          return
        }

        const response = await fetch(fullUrl, { headers })
        const data = await response.json()

        if (response.ok) {
          setExampleResponse(data)
        } else {
          setExampleResponse({ error: data.error || 'Request failed' })
        }
      } catch (error) {
        setExampleResponse({
          error:
            error instanceof Error ? error.message : 'Failed to fetch example',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchExampleResponse()
  }, [endpoint])

  return { exampleResponse, loading }
}
