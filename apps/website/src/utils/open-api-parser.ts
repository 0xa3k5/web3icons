export interface EndpointInput {
  name: string
  label: string
  type: 'text' | 'number' | 'select'
  placeholder?: string
  defaultValue?: string
  options?: string[]
  required?: boolean
  description: string
  in?: 'query' | 'path' | 'header' | 'cookie'
  value?: string
  onChange?: (value: string) => void
}

export interface ApiResponse {
  status: string
  description: string
  example?: any
}

export interface IEndpoint {
  id: string
  name: string
  endpoint: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  requiresAuth: boolean
  description: string
  longDescription: string
  pathExample?: string
  inputs?: EndpointInput[]
  responses?: ApiResponse[]
  defaultQueryParams?: Record<string, string>
}

export interface EndpointGroup {
  category: string
  endpoints: IEndpoint[]
}

interface OpenAPISpec {
  openapi: string
  info: {
    title: string
    version: string
    description: string
  }
  paths: Record<string, Record<string, any>>
  components?: {
    schemas?: Record<string, any>
    securitySchemes?: Record<string, any>
  }
  tags?: Array<{ name: string; description: string }>
}

function parseParameters(parameters: any[] = []): EndpointInput[] {
  return parameters.map((param) => ({
    name: param.name,
    label: param.name.charAt(0).toUpperCase() + param.name.slice(1),
    type:
      param.schema?.type === 'integer'
        ? 'number'
        : param.schema?.enum
          ? 'select'
          : param.schema?.type || 'text',
    placeholder: param.schema?.example || param.example,
    defaultValue:
      param.schema?.default?.toString() ||
      (param.in === 'path' ? param.schema?.example : undefined),
    options: param.schema?.enum,
    required: param.required || false,
    description: param.description || '',
    in: param.in, // Add the parameter location info
  }))
}

export function parseOpenAPISpec(spec: OpenAPISpec): EndpointGroup[] {
  const tagGroups = new Map<string, IEndpoint[]>()

  // Initialize groups from tags if they exist
  if (spec.tags) {
    spec.tags.forEach((tag) => {
      tagGroups.set(tag.name, [])
    })
  }

  // Parse paths
  Object.entries(spec.paths).forEach(([path, methods]) => {
    Object.entries(methods).forEach(([method, operation]) => {
      const tags = operation.tags || ['Default']
      const tag = tags[0] // Use first tag

      if (!tagGroups.has(tag)) {
        tagGroups.set(tag, [])
      }

      const responses: ApiResponse[] = operation.responses
        ? Object.entries(operation.responses).map(
            ([status, response]: [string, any]) => ({
              status,
              description: response.description || `Status ${status}`,
              example: response.content?.['application/json']?.schema?.example,
            }),
          )
        : []

      const getDefaultQueryParams = (
        path: string,
        method: string,
      ): Record<string, string> => {
        if (path === '/v1/search' && method === 'get') {
          return { q: 'eth' }
        }
        if (path === '/v1/search/advanced' && method === 'get') {
          return { symbol: 'ETH' }
        }
        if (path === '/v1/search/suggest' && method === 'get') {
          return { q: 'bit' }
        }
        if (path.includes('/tokens/') && method === 'get') {
          return {}
        }
        if (path.includes('/networks/') && method === 'get') {
          return {}
        }
        if (path.includes('/wallets/') && method === 'get') {
          return {}
        }
        return {}
      }

      const endpoint: IEndpoint = {
        id:
          path.replace(/^\//, '').replace(/[{}]/g, '').toLowerCase() || 'root',
        name: operation.summary || `${method.toUpperCase()} ${path}`,
        endpoint: path,
        method: method.toUpperCase() as any,
        requiresAuth: !!(operation.security && operation.security.length > 0),
        description: operation.summary || '',
        longDescription: operation.description || '',
        pathExample: path.includes('{')
          ? path.replace(/{([^}]+)}/g, (_, param) => {
              const pathParam = operation.parameters?.find(
                (p: any) => p.name === param && p.in === 'path',
              )
              return (
                pathParam?.schema?.example || pathParam?.example || `{${param}}`
              )
            })
          : undefined,
        inputs: parseParameters(
          operation.parameters?.filter(
            (p: any) => p.in === 'query' || p.in === 'path',
          ),
        ),
        responses,
        defaultQueryParams: getDefaultQueryParams(path, method),
      }

      tagGroups.get(tag)!.push(endpoint)
    })
  })

  // Convert to EndpointGroup format
  return Array.from(tagGroups.entries())
    .map(([category, endpoints]) => ({
      category,
      endpoints,
    }))
    .filter((group) => group.endpoints.length > 0)
}

export async function fetchOpenAPISpec(): Promise<EndpointGroup[]> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  try {
    const response = await fetch(`${API_URL}/docs/openapi.json`)
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const spec: OpenAPISpec = await response.json()
    return parseOpenAPISpec(spec)
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Failed to fetch OpenAPI spec',
    )
  }
}
