'use client'

import { useState } from 'react'
import { IApiKeyWithUsage } from '../../../types'
import { format } from 'date-fns'
import { TableHeader } from '../../../components/table'
import { TableCell } from '../../../components/table/table-cell'
import { TableRow } from '../../../components/table/table-row'
import { Button } from '../../../components/button'

interface Props {
  initialApiKeys: IApiKeyWithUsage[]
}

export function ApiKeysTable({ initialApiKeys }: Props) {
  const [apiKeys, setApiKeys] = useState(initialApiKeys)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newKeyName, setNewKeyName] = useState('')
  const [newApiKey, setNewApiKey] = useState<string | null>(null)
  const [isCreating, setIsCreating] = useState(false)
  const [revealedKeys, setRevealedKeys] = useState<Map<string, string>>(
    new Map(),
  )
  const [revealingKeyId, setRevealingKeyId] = useState<string | null>(null)

  const handleCreateKey = async () => {
    if (!newKeyName.trim()) return

    setIsCreating(true)
    try {
      const response = await fetch('/api/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newKeyName }),
      })

      const data = await response.json()
      if (data.key) {
        setNewApiKey(data.key)
        const newApiKeyWithUsage = {
          ...data.apiKey,
          requestsToday: 0,
          requestsThisMonth: 0,
        }
        setApiKeys([...apiKeys, newApiKeyWithUsage])
        setNewKeyName('')
        setShowCreateForm(false)
      }
    } catch (error) {
      console.error('Failed to create API key:', error)
    } finally {
      setIsCreating(false)
    }
  }

  const handleDeleteKey = async (id: string) => {
    if (!confirm('Are you sure you want to delete this API key?')) return

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

  const handleRevealKey = async (keyId: string) => {
    setRevealingKeyId(keyId)
    try {
      const response = await fetch(`/api/keys/${keyId}/reveal`)
      const data = await response.json()

      if (response.ok && data.key) {
        const newRevealedKeys = new Map(revealedKeys)
        newRevealedKeys.set(keyId, data.key)
        setRevealedKeys(newRevealedKeys)
      }
    } catch (error) {
      console.error('Failed to reveal key:', error)
    } finally {
      setRevealingKeyId(null)
    }
  }

  const handleHideKey = (keyId: string) => {
    const newRevealedKeys = new Map(revealedKeys)
    newRevealedKeys.delete(keyId)
    setRevealedKeys(newRevealedKeys)
  }

  const maskKey = (keyPrefix: string, last4: string) => {
    return `${keyPrefix}${'•'.repeat(20)}${last4}`
  }

  return (
    <div className="border-gray-lightest flex flex-col gap-8 rounded-xl border p-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-mono text-lg">api keys</h2>

        <Button variant="secondary" onClick={() => setShowCreateForm(true)}>
          create new key
        </Button>
      </div>

      {showCreateForm && (
        <div className="border-gray-lightest bg-gray-dark mb-6 border p-4">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="key name (e.g., production app)"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              className="border-gray-lightest bg-gray w-full border px-3 py-2 text-sm focus:border-white/40 focus:outline-none"
              onKeyDown={(e) => e.key === 'Enter' && handleCreateKey()}
            />
            <div className="flex gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={handleCreateKey}
                disabled={!newKeyName.trim()}
                loading={isCreating}
              >
                {isCreating ? 'creating...' : 'create'}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setShowCreateForm(false)
                  setNewKeyName('')
                }}
              >
                cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* New API Key Display */}
      {newApiKey && (
        <div className="border-primary bg-primary/10 mb-6 border p-4">
          <p className="mb-2 text-sm">
            <span className="text-white/60">your new api key:</span>
          </p>
          <div className="flex items-center gap-2">
            <code className="border-gray-lightest bg-gray-dark flex-1 border px-3 py-2 font-mono text-xs">
              {newApiKey}
            </code>
            <Button
              variant="ghost"
              size="xs"
              onClick={() => copyToClipboard(newApiKey)}
            >
              copy
            </Button>
            <Button variant="icon" size="xs" onClick={() => setNewApiKey(null)}>
              ✕
            </Button>
          </div>
        </div>
      )}

      {apiKeys.length === 0 ? (
        <div className="py-8 text-center">
          <p className="mb-2 text-white/40">no api keys yet</p>
          <p className="text-sm text-white/60">
            create your first key to get started
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <TableRow>
                <TableHeader className="text-left">name</TableHeader>
                <TableHeader className="w-96 text-left">key</TableHeader>
                <TableHeader className="text-right">today</TableHeader>
                <TableHeader className="text-right">month</TableHeader>
                <TableHeader className="text-right">created</TableHeader>
                <TableHeader className="text-right">last used</TableHeader>
                <TableHeader className="text-right">actions</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {apiKeys.map((key) => (
                <TableRow key={key.id}>
                  <TableCell className="text-left">
                    <span className="font-mono text-sm">{key.name}</span>
                  </TableCell>
                  <TableCell className="w-96 text-left">
                    <div className="flex items-center gap-2">
                      <code className="font-mono text-xs text-white/40">
                        {revealedKeys.has(key.id)
                          ? revealedKeys.get(key.id)
                          : maskKey(key.key_prefix, key.last_4)}
                      </code>

                      {revealedKeys.has(key.id) ? (
                        <>
                          <Button
                            variant="ghost"
                            size="xs"
                            onClick={() =>
                              copyToClipboard(revealedKeys.get(key.id)!)
                            }
                          >
                            copy
                          </Button>
                          <Button
                            variant="ghost"
                            size="xs"
                            onClick={() => handleHideKey(key.id)}
                          >
                            hide
                          </Button>
                        </>
                      ) : (
                        <Button
                          variant="ghost"
                          size="xs"
                          onClick={() => handleRevealKey(key.id)}
                          disabled={revealingKeyId === key.id}
                          loading={revealingKeyId === key.id}
                        >
                          reveal
                        </Button>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`font-mono text-sm ${
                        (key.requestsToday || 0) > 100
                          ? 'text-green-400'
                          : (key.requestsToday || 0) > 0
                            ? 'text-blue-400'
                            : 'text-white/40'
                      }`}
                    >
                      {key.requestsToday || 0}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={`font-mono text-sm ${
                        (key.requestsThisMonth || 0) > 1000
                          ? 'text-green-400'
                          : (key.requestsThisMonth || 0) > 0
                            ? 'text-blue-400'
                            : 'text-white/40'
                      }`}
                    >
                      {(key.requestsThisMonth || 0).toLocaleString()}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-xs text-white/40">
                      {format(new Date(key.created_at), 'MMM dd, yyyy')}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-xs text-white/40">
                      {key.last_used
                        ? format(new Date(key.last_used), 'MMM dd, HH:mm')
                        : 'never'}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="destructive"
                      size="xs"
                      onClick={() => handleDeleteKey(key.id)}
                      iconBefore={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
