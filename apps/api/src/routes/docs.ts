import { Hono } from 'hono'

const docs = new Hono()

const openApiSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Web3Icons API',
    version: '1.0.0',
    description:
      'API for accessing Web3 icons, metadata, and search functionality',
    contact: {
      name: 'Web3Icons',
      url: 'https://web3icons.io',
    },
  },
  servers: [
    {
      url: 'https://api.web3icons.io',
      description: 'Production server',
    },
  ],
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'X-API-Key',
        description: 'API key required for authenticated endpoints',
      },
    },
    schemas: {
      Error: {
        type: 'object',
        properties: {
          error: {
            type: 'string',
            description: 'Error message',
          },
        },
        required: ['error'],
      },
      IconMetadata: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          symbol: { type: 'string' },
          chain: { type: 'string' },
          tags: { type: 'array', items: { type: 'string' } },
          urls: {
            type: 'object',
            properties: {
              mono: { type: 'string', format: 'uri' },
              branded: { type: 'string', format: 'uri' },
            },
          },
        },
      },
      SearchResponse: {
        type: 'object',
        properties: {
          query: { type: 'string' },
          total: { type: 'integer' },
          limit: { type: 'integer' },
          offset: { type: 'integer' },
          results: {
            type: 'array',
            items: { $ref: '#/components/schemas/IconMetadata' },
          },
        },
      },
    },
  },
  paths: {
    '/health': {
      get: {
        summary: 'Health Check',
        description:
          'Returns the current status of the Web3Icons API. This endpoint can be used for monitoring and health checks.',
        tags: ['Basic'],
        responses: {
          200: {
            description: 'API is healthy',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    status: { type: 'string', example: 'ok' },
                    timestamp: { type: 'string', format: 'date-time' },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/v1/search': {
      get: {
        summary: 'Search Icons',
        description:
          'Performs a fuzzy search across all icon types (tokens, networks, wallets, exchanges). Returns ranked results based on relevance score.',
        tags: ['Search'],
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'q',
            in: 'query',
            required: true,
            description: 'Search term to match against icon names and symbols',
            schema: { type: 'string', example: 'eth' },
          },
          {
            name: 'type',
            in: 'query',
            description: 'Filter results by icon type',
            schema: {
              type: 'string',
              enum: ['token', 'network', 'wallet', 'exchange'],
            },
          },
          {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of results to return',
            schema: { type: 'integer', default: 20, minimum: 1, maximum: 100 },
          },
          {
            name: 'offset',
            in: 'query',
            description: 'Number of results to skip for pagination',
            schema: { type: 'integer', default: 0, minimum: 0 },
          },
        ],
        responses: {
          200: {
            description: 'Search results',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/SearchResponse' },
              },
            },
          },
          400: {
            description: 'Bad request - missing or invalid parameters',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          401: {
            description: 'Unauthorized - invalid or missing API key',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/v1/search/advanced': {
      get: {
        summary: 'Advanced Search',
        description:
          'Perform advanced searches using specific field criteria. Supports exact and partial matching on symbol, name, chain, and tags.',
        tags: ['Search'],
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'symbol',
            in: 'query',
            description: 'Match icons by symbol (e.g., ETH, BTC)',
            schema: { type: 'string', example: 'ETH' },
          },
          {
            name: 'name',
            in: 'query',
            description: 'Match icons by name (e.g., Ethereum, Bitcoin)',
            schema: { type: 'string', example: 'Ethereum' },
          },
          {
            name: 'chain',
            in: 'query',
            description: 'Filter by blockchain network',
            schema: { type: 'string', example: 'ethereum' },
          },
          {
            name: 'tag',
            in: 'query',
            description: 'Filter by category tags',
            schema: { type: 'string', example: 'defi' },
          },
          {
            name: 'type',
            in: 'query',
            description: 'Filter by icon type',
            schema: {
              type: 'string',
              enum: ['token', 'network', 'wallet', 'exchange'],
            },
          },
        ],
        responses: {
          200: {
            description: 'Advanced search results',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    filters: { type: 'object' },
                    total: { type: 'integer' },
                    results: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/IconMetadata' },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: 'Unauthorized - invalid or missing API key',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/v1/search/suggest': {
      get: {
        summary: 'Autocomplete Suggestions',
        description:
          'Returns a list of suggested search terms based on the input query. Useful for implementing autocomplete functionality.',
        tags: ['Search'],
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'q',
            in: 'query',
            required: true,
            description: 'Partial search term to get suggestions for',
            schema: { type: 'string', example: 'bit' },
          },
          {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of suggestions to return',
            schema: { type: 'integer', default: 10, minimum: 1, maximum: 50 },
          },
        ],
        responses: {
          200: {
            description: 'Autocomplete suggestions',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    query: { type: 'string' },
                    suggestions: {
                      type: 'array',
                      items: { type: 'string' },
                    },
                  },
                },
              },
            },
          },
          401: {
            description: 'Unauthorized - invalid or missing API key',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/v1/icons/tokens/{id}': {
      get: {
        summary: 'Get Token Icon',
        description:
          'Retrieve icon data and URLs for a specific cryptocurrency token. Returns metadata and CDN URLs for different variants.',
        tags: ['Icons'],
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Token ID or symbol (e.g., ETH, bitcoin)',
            schema: { type: 'string', example: 'ETH' },
          },
        ],
        responses: {
          200: {
            description: 'Token icon data',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/IconMetadata' },
              },
            },
          },
          404: {
            description: 'Token not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/v1/icons/networks/{id}': {
      get: {
        summary: 'Get Network Icon',
        description:
          'Retrieve icon data and URLs for a specific blockchain network.',
        tags: ['Icons'],
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Network ID or name (e.g., ethereum, bitcoin)',
            schema: { type: 'string', example: 'ethereum' },
          },
        ],
        responses: {
          200: {
            description: 'Network icon data',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/IconMetadata' },
              },
            },
          },
          401: {
            description: 'Unauthorized - invalid or missing API key',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          404: {
            description: 'Network not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/v1/icons/wallets/{id}': {
      get: {
        summary: 'Get Wallet Icon',
        description:
          'Retrieve icon data and URLs for a specific cryptocurrency wallet.',
        tags: ['Icons'],
        security: [{ ApiKeyAuth: [] }],
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            description: 'Wallet ID or name (e.g., metamask, trust)',
            schema: { type: 'string', example: 'metamask' },
          },
        ],
        responses: {
          200: {
            description: 'Wallet icon data',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/IconMetadata' },
              },
            },
          },
          401: {
            description: 'Unauthorized - invalid or missing API key',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
          404: {
            description: 'Wallet not found',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/v1/metadata/tokens': {
      get: {
        summary: 'Get All Tokens',
        description:
          'Returns a comprehensive list of all available token metadata including symbols, names, descriptions, and other properties.',
        tags: ['Metadata'],
        security: [{ ApiKeyAuth: [] }],
        responses: {
          200: {
            description: 'List of all tokens',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/IconMetadata' },
                    },
                    count: { type: 'integer' },
                  },
                },
              },
            },
          },
          401: {
            description: 'Unauthorized - invalid or missing API key',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/v1/metadata/networks': {
      get: {
        summary: 'Get All Networks',
        description:
          'Returns a comprehensive list of all available blockchain network metadata.',
        tags: ['Metadata'],
        security: [{ ApiKeyAuth: [] }],
        responses: {
          200: {
            description: 'List of all networks',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/IconMetadata' },
                    },
                    count: { type: 'integer' },
                  },
                },
              },
            },
          },
          401: {
            description: 'Unauthorized - invalid or missing API key',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/v1/metadata/wallets': {
      get: {
        summary: 'Get All Wallets',
        description:
          'Returns a comprehensive list of all available wallet metadata.',
        tags: ['Metadata'],
        security: [{ ApiKeyAuth: [] }],
        responses: {
          200: {
            description: 'List of all wallets',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/IconMetadata' },
                    },
                    count: { type: 'integer' },
                  },
                },
              },
            },
          },
          401: {
            description: 'Unauthorized - invalid or missing API key',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
    '/v1/metadata/exchanges': {
      get: {
        summary: 'Get All Exchanges',
        description:
          'Returns a comprehensive list of all available exchange metadata.',
        tags: ['Metadata'],
        security: [{ ApiKeyAuth: [] }],
        responses: {
          200: {
            description: 'List of all exchanges',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    data: {
                      type: 'array',
                      items: { $ref: '#/components/schemas/IconMetadata' },
                    },
                    count: { type: 'integer' },
                  },
                },
              },
            },
          },
          401: {
            description: 'Unauthorized - invalid or missing API key',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/Error' },
              },
            },
          },
        },
      },
    },
  },
  tags: [
    {
      name: 'Basic',
      description: 'Basic API operations',
    },
    {
      name: 'Search',
      description: 'Search and discovery endpoints',
    },
    {
      name: 'Icons',
      description: 'Individual icon retrieval',
    },
    {
      name: 'Metadata',
      description: 'Bulk metadata operations',
    },
  ],
}

docs.get('/openapi.json', (c) => {
  return c.json(openApiSpec)
})

// Return documentation endpoint info
docs.get('/', (c) => {
  return c.json({
    message: 'Web3Icons API Documentation',
    openapi_spec: `${c.req.url}openapi.json`,
    interactive_docs: 'https://web3icons.io/api-reference',
  })
})

export default docs
