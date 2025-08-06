'use client'

import { useState } from 'react'
import { CodeBlock } from '../../components'

const API_URL = process.env.NEXT_PUBLIC_API_URL

interface ApiResponse {
  status: number
  data: any
  error?: string
}

export default function TestPage() {
  const [apiKey, setApiKey] = useState('')
  const [response, setResponse] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const makeRequest = async (
    endpoint: string,
    method: string = 'GET',
    body?: any,
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

      const res = await fetch(`${API_URL}${endpoint}`, config)
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

  const endpoints = [
    {
      name: 'health check',
      endpoint: '/health',
      method: 'GET',
      requiresAuth: false,
      description: 'basic health check endpoint',
    },
    {
      name: 'get icon - ethereum',
      endpoint: '/v1/icons/tokens/ETH',
      method: 'GET',
      requiresAuth: true,
      description: 'get ethereum token icon data',
    },
    {
      name: 'get icon - bitcoin',
      endpoint: '/v1/icons/tokens/BTC',
      method: 'GET',
      requiresAuth: true,
      description: 'get bitcoin token icon data',
    },
    {
      name: 'get network icon - ethereum',
      endpoint: '/v1/icons/networks/ethereum',
      method: 'GET',
      requiresAuth: true,
      description: 'get ethereum network icon data',
    },
    {
      name: 'get wallet icon - metamask',
      endpoint: '/v1/icons/wallets/metamask',
      method: 'GET',
      requiresAuth: true,
      description: 'get metamask wallet icon data',
    },
    {
      name: 'get metadata - all tokens',
      endpoint: '/v1/metadata/tokens',
      method: 'GET',
      requiresAuth: true,
      description: 'get metadata for all tokens',
    },
    {
      name: 'get metadata - all networks',
      endpoint: '/v1/metadata/networks',
      method: 'GET',
      requiresAuth: true,
      description: 'get metadata for all networks',
    },
    {
      name: 'get metadata - all wallets',
      endpoint: '/v1/metadata/wallets',
      method: 'GET',
      requiresAuth: true,
      description: 'get metadata for all wallets',
    },
    {
      name: 'get metadata - all exchanges',
      endpoint: '/v1/metadata/exchanges',
      method: 'GET',
      requiresAuth: true,
      description: 'get metadata for all exchanges',
    },
  ]

  return (
    <div className="container mx-auto space-y-8 py-8">
      <div className="max-w-4xl">
        <h1 className="mb-4 font-mono text-4xl">api testing</h1>
        <p className="mb-8 text-white/40">
          test all web3icons api endpoints with interactive ui
        </p>

        {/* API Key Input */}
        <div className="mb-8 border border-gray-lightest p-6">
          <h2 className="mb-4 font-mono text-xl">api key</h2>
          <input
            type="text"
            placeholder="enter your api key (w3i_live_...)"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full border border-gray-lightest bg-gray px-3 py-2 font-mono text-sm focus:border-white/40 focus:outline-none"
          />
          <p className="mt-2 text-xs text-white/40">
            required for /v1/* endpoints. get one from the{' '}
            <a href="/dashboard" className="text-primary hover:underline">
              dashboard
            </a>
          </p>
        </div>

        {/* Endpoints */}
        <div className="border border-gray-lightest p-6">
          <h2 className="mb-6 font-mono text-xl">endpoints</h2>
          <div className="grid gap-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="border border-gray-lightest p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <h3 className="font-mono">{endpoint.name}</h3>
                    <p className="text-xs text-white/40">
                      {endpoint.description}
                    </p>
                    <code className="mt-1 inline-block bg-gray-dark px-2 py-1 text-xs">
                      {endpoint.method} {endpoint.endpoint}
                    </code>
                  </div>
                  <button
                    onClick={() =>
                      makeRequest(endpoint.endpoint, endpoint.method)
                    }
                    disabled={loading || (endpoint.requiresAuth && !apiKey)}
                    className={`px-4 py-2 text-sm duration-150 ${
                      loading || (endpoint.requiresAuth && !apiKey)
                        ? 'cursor-not-allowed bg-gray text-white/40'
                        : 'bg-primary hover:bg-primary/80'
                    }`}
                  >
                    {loading ? 'testing...' : 'test'}
                  </button>
                </div>
                {endpoint.requiresAuth && (
                  <p className="text-orange-400 text-xs">🔒 requires api key</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Response Display */}
        {response && (
          <div className="border border-gray-lightest p-6">
            <div className="mb-4 flex items-center gap-2">
              <h2 className="font-mono text-xl">response</h2>
              <span
                className={`px-2 py-1 font-mono text-xs ${
                  response.status >= 200 && response.status < 300
                    ? 'bg-green-900 text-green-200'
                    : 'bg-red-900 text-red-200'
                }`}
              >
                {response.status}
              </span>
            </div>

            <CodeBlock
              lineNumbers={true}
              tabs={[
                {
                  label: 'json',
                  content: JSON.stringify(response.data, null, 2),
                  language: 'json',
                },
              ]}
            />

            {response.error && (
              <div className="bg-red-900/20 border-red-500/20 text-red-200 mt-4 border p-3 text-sm">
                <strong>error:</strong> {response.error}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
