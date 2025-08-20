import { IEndpoint } from './open-api-parser'

export function generateCurl({
  endpoint,
  apiKey,
  queryParams = {},
}: {
  endpoint: IEndpoint
  apiKey: string
  queryParams?: Record<string, string>
}) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const finalQueryParams: Record<string, string> = {}
  let url = endpoint.endpoint

  // Include default query params
  if (endpoint.defaultQueryParams) {
    Object.assign(finalQueryParams, endpoint.defaultQueryParams)
  }

  // Process provided params - separate path and query params
  Object.entries(queryParams).forEach(([key, value]) => {
    if (value !== undefined && value !== '') {
      // Check if this is a path parameter
      const input = endpoint.inputs?.find((inp) => inp.name === key)
      if (input?.in === 'path') {
        // Replace path parameter in URL
        url = url.replace(`{${key}}`, encodeURIComponent(value))
      } else {
        // Add as query parameter
        finalQueryParams[key] = value
      }
    }
  })

  // Fallback to endpoint inputs if no queryParams provided (backward compatibility)
  if (Object.keys(queryParams).length === 0 && endpoint.inputs) {
    endpoint.inputs.forEach((input) => {
      if (input.value !== undefined && input.value !== '') {
        if (input.in === 'path') {
          url = url.replace(`{${input.name}}`, encodeURIComponent(input.value))
        } else {
          finalQueryParams[input.name] = input.value
        }
      }
    })
  }

  // Build query string
  const queryString =
    Object.keys(finalQueryParams).length > 0
      ? '?' +
        Object.entries(finalQueryParams)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
          )
          .join('&')
      : ''

  const fullUrl = `${API_URL}${url}${queryString}`

  let curlCommand = `curl -X ${endpoint.method}`

  if (endpoint.requiresAuth && apiKey) {
    curlCommand += ` \\\n  -H "X-API-Key: ${apiKey}"`
  }

  curlCommand += ` \\\n  "${fullUrl}"`

  return curlCommand
}
