import { useEffect, useMemo, useState } from 'react'
import { CodeBlock } from '../../../components'
import { Input } from '../../../components/input'
import { IEndpoint } from '../../../utils/open-api-parser'
import { generateCurl } from '../../../utils/generate-curl'
import { useExampleResponse } from '../hooks/useExampleResponse'
import { useApiRequest } from '../hooks/useApiRequest'
import cx from 'classnames'

interface Props {
  apiKey: string
  endpoint: IEndpoint
  queryParams: Record<string, string>
  onApiKeyChange: (key: string) => void
  className?: string
}

export function ApiPlayground({
  apiKey,
  endpoint,
  queryParams,
  onApiKeyChange,
  className,
}: Props) {
  const [curl, setCurl] = useState('')
  const { loading, response, makeRequest } = useApiRequest()

  useEffect(() => {
    setCurl(generateCurl({ endpoint, apiKey, queryParams }))
  }, [endpoint, apiKey, queryParams])

  const { exampleResponse } = useExampleResponse({
    endpoint,
  })

  const getFilteredQueryParams = () => {
    const filtered: Record<string, string> = {}

    // Include default query params
    if (endpoint.defaultQueryParams) {
      Object.assign(filtered, endpoint.defaultQueryParams)
    }

    // Include non-empty query params
    Object.entries(queryParams).forEach(([key, value]) => {
      if (value !== undefined && value !== '') {
        filtered[key] = value
      }
    })

    return filtered
  }

  const handleSendRequest = () => {
    makeRequest(
      endpoint.endpoint,
      endpoint.method,
      apiKey,
      undefined,
      getFilteredQueryParams(),
      endpoint.inputs,
    )
  }

  return (
    <div className={cx('border-l border-gray-lightest p-6', className)}>
      <div className="mb-6">
        <h3 className="mb-4 text-lg">API Playground</h3>

        {endpoint.requiresAuth && (
          <Input
            label="API Key"
            type="text"
            placeholder="w3i_live_..."
            value={apiKey}
            onChange={(e) => onApiKeyChange(e.target.value)}
            containerClassName="mb-4"
          />
        )}

        <div className="flex flex-col gap-2">
          <CodeBlock
            lineNumbers={false}
            classNames="h-40"
            tabs={[
              {
                label: 'curl',
                content: curl,
                language: 'bash',
              },
            ]}
          />
          <button
            onClick={handleSendRequest}
            disabled={loading || (endpoint.requiresAuth && !apiKey)}
            className={`w-full rounded-md bg-primary py-2 text-sm text-white transition-colors hover:bg-primary/80 disabled:cursor-not-allowed disabled:bg-gray disabled:text-white/40`}
          >
            {loading ? 'Sending...' : 'Send Request'}
          </button>
        </div>
      </div>

      <div className="border-t border-gray-lightest pt-6">
        <h4 className="text-md mb-4">Response</h4>

        {response?.error && (
          <div className="bg-red-900/20 border-red-500/20 text-red-200 mb-4 border p-3 text-sm">
            <strong>Error:</strong> {response.error}
          </div>
        )}

        {response ? (
          <CodeBlock
            lineNumbers={false}
            tabs={[
              {
                label: `Response (${response.status})`,
                content: JSON.stringify(response.data, null, 2),
                language: 'json',
              },
            ]}
          />
        ) : exampleResponse ? (
          <div>
            <p className="mb-2 text-sm text-white/60">
              {exampleResponse.error ? 'Example Error:' : 'Example Response:'}
            </p>
            <CodeBlock
              lineNumbers={false}
              tabs={[
                {
                  label: exampleResponse.error ? 'Error' : 'Example 200',
                  content: JSON.stringify(exampleResponse, null, 2),
                  language: 'json',
                },
              ]}
            />
          </div>
        ) : (
          <div className="py-8 text-center text-sm text-white/40">
            Send a request to see the response
          </div>
        )}
      </div>
    </div>
  )
}
