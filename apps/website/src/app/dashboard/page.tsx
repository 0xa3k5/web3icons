'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@clerk/nextjs'

interface ApiKey {
  id: string
  name: string
  key_prefix: string
  last_4: string
  created_at: string
  last_used?: string
}

interface UsageStats {
  requests: number
  remaining: number
  percentUsed: number
  dailyLimit: number
}

export default function DashboardPage() {
  const { user } = useUser()
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [newKeyName, setNewKeyName] = useState('')
  const [newApiKey, setNewApiKey] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [usage, setUsage] = useState<UsageStats>({
    requests: 0,
    remaining: 1000,
    percentUsed: 0,
    dailyLimit: 1000,
  })

  useEffect(() => {
    fetchApiKeys()
    fetchUsage()
  }, [])

  const fetchApiKeys = async () => {
    try {
      const response = await fetch('/api/keys')
      const data = await response.json()
      setApiKeys(data.keys || [])
    } catch (error) {
      console.error('Failed to fetch API keys:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchUsage = async () => {
    try {
      const response = await fetch('/api/usage')
      const data = await response.json()
      if (data.requests !== undefined) {
        setUsage(data)
      }
    } catch (error) {
      console.error('Failed to fetch usage:', error)
    }
  }

  const createApiKey = async () => {
    if (!newKeyName.trim()) return

    try {
      const response = await fetch('/api/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newKeyName }),
      })

      const data = await response.json()
      if (data.key) {
        setNewApiKey(data.key)
        setApiKeys([...apiKeys, data.apiKey])
        setNewKeyName('')
        fetchUsage() // refresh usage after creating key
      }
    } catch (error) {
      console.error('Failed to create API key:', error)
    }
  }

  const deleteApiKey = async (id: string) => {
    try {
      await fetch(`/api/keys/${id}`, { method: 'DELETE' })
      setApiKeys(apiKeys.filter((key) => key.id !== id))
    } catch (error) {
      console.error('Failed to delete API key:', error)
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-8">
      {/* API Keys Section */}
      <div className="border border-gray-lightest p-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="font-mono text-xl">api keys</h2>
            <span className="text-sm text-white/40">
              manage your api keys for accessing web3icons api
            </span>
          </div>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-primary px-4 py-2 text-sm duration-150 hover:bg-primary/80"
          >
            create new key
          </button>
        </div>

        {/* Create New Key Form */}
        {isCreating && (
          <div className="mb-6 border border-gray-lightest bg-gray-dark p-4">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="key name (e.g., production app)"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                className="w-full border border-gray-lightest bg-gray px-3 py-2 text-sm focus:border-white/40 focus:outline-none"
              />
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    createApiKey()
                    setIsCreating(false)
                  }}
                  className="bg-primary px-4 py-2 text-sm duration-150 hover:bg-primary/80"
                >
                  create
                </button>
                <button
                  onClick={() => {
                    setIsCreating(false)
                    setNewKeyName('')
                  }}
                  className="border border-gray-lightest px-4 py-2 text-sm duration-150 hover:bg-gray-dark"
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* New API Key Display */}
        {newApiKey && (
          <div className="mb-6 border border-primary bg-primary/10 p-4">
            <p className="mb-2 text-sm">
              <span className="text-white/60">
                your new api key (save it now, you won't see it again):
              </span>
            </p>
            <div className="flex items-center gap-2">
              <code className="flex-1 border border-gray-lightest bg-gray-dark px-3 py-2 text-xs">
                {newApiKey}
              </code>
              <button
                onClick={() => copyToClipboard(newApiKey)}
                className="border border-gray-lightest px-3 py-2 text-sm duration-150 hover:bg-gray-dark"
              >
                copy
              </button>
              <button
                onClick={() => setNewApiKey(null)}
                className="text-white/40 hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* API Keys List */}
        <div className="space-y-2">
          {loading ? (
            <p className="text-sm text-white/40">loading...</p>
          ) : apiKeys.length === 0 ? (
            <p className="text-sm text-white/40">no api keys yet</p>
          ) : (
            apiKeys.map((key) => (
              <div
                key={key.id}
                className="flex items-center justify-between border border-gray-lightest p-4"
              >
                <div>
                  <p className="font-mono">{key.name}</p>
                  <p className="text-xs text-white/40">
                    {key.key_prefix}...{key.last_4} • created{' '}
                    {new Date(key.created_at).toLocaleDateString()}
                    {key.last_used &&
                      ` • last used ${new Date(key.last_used).toLocaleDateString()}`}
                  </p>
                </div>
                <button
                  onClick={() => deleteApiKey(key.id)}
                  className="px-2 text-white/40 hover:text-white"
                >
                  delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quick Start */}
      <div className="border border-gray-lightest p-6">
        <h2 className="mb-4 font-mono text-xl">quick start</h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <span className="text-white/40">1.</span>
            <span>create an api key above</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white/40">2.</span>
            <div>
              <span>make a request with your key:</span>
              <pre className="mt-2 overflow-x-auto border border-gray-lightest bg-gray-dark p-3 text-xs">
                {`curl -H "X-API-Key: YOUR_API_KEY" \\
  "https://web3icons-production.up.railway.app/v1/icons/tokens/ETH"`}
              </pre>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-white/40">3.</span>
            <span>rate limit: 1000 requests per day (free tier)</span>
          </div>
        </div>
      </div>

      {/* Usage Stats Preview */}
      <div className="border border-gray-lightest p-6">
        <h2 className="mb-4 font-mono text-xl">usage today</h2>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="font-mono text-2xl">{usage.requests}</p>
            <p className="text-xs text-white/40">requests</p>
          </div>
          <div>
            <p className="font-mono text-2xl">{usage.remaining}</p>
            <p className="text-xs text-white/40">remaining</p>
          </div>
          <div>
            <p className="font-mono text-2xl">{usage.percentUsed}%</p>
            <p className="text-xs text-white/40">used</p>
          </div>
        </div>
      </div>
    </div>
  )
}
