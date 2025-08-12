'use client'

import cx from 'classnames'
import { IEndpoint } from '../../../utils/open-api-parser'
import { Input } from '../../../components/input'
import { Select } from '../../../components/select'

interface Props {
  endpoint: IEndpoint
  queryParams: Record<string, string>
  onQueryParamChange: (name: string, value: string) => void
  className?: string
}

export function Documentation({
  endpoint,
  queryParams,
  onQueryParamChange,
  className,
}: Props) {
  return (
    <div className={cx('p-8', className)}>
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <span
            data-method={endpoint.method}
            // prettier-ignore
            className={`
              border
              font-mono rounded px-2 py-1 text-sm
              data-[method=GET]:border-green-900
              data-[method=GET]:text-green-200 
              data-[method=POST]:border-blue-900
              data-[method=POST]:text-blue-200
              data-[method=PUT]:border-yellow-900
              data-[method=PUT]:text-yellow-200
              data-[method=DELETE]:border-red-900
              data-[method=DELETE]:text-red-200
              data-[method=PATCH]:border-purple-900
              data-[method=PATCH]:text-purple-200
            `}
          >
            {endpoint.method}
          </span>
          <h1 className="text-xl">{endpoint.name}</h1>
          {endpoint.requiresAuth && (
            <span className="rounded border border-white/50 bg-white/10 px-2 py-1 text-xs text-white">
              Requires Auth
            </span>
          )}
        </div>

        <p className="mb-4 text-white/60">{endpoint.description}</p>

        {endpoint.longDescription && (
          <p className="mb-6 text-white/80">{endpoint.longDescription}</p>
        )}

        <div className="border-gray-lightest bg-gray-dark rounded-sm border p-4">
          <code className="text-sm">
            {endpoint.method} {endpoint.pathExample || endpoint.endpoint}
          </code>
        </div>
      </div>

      {endpoint.inputs && endpoint.inputs.length > 0 && (
        <div className="flex flex-col gap-4">
          <h2 className="text-lg">Parameters</h2>
          <div className="flex flex-col gap-4">
            {endpoint.inputs.map((input, index) => (
              <div
                key={index}
                className="border-gray-lightest flex flex-col gap-4 border p-4"
              >
                <div className="flex items-baseline gap-2">
                  <code className="text-white">{input.name}</code>
                  <span className="text-xs text-white/40">{input.type}</span>
                  {input.required && (
                    <span className="text-xs text-white">required</span>
                  )}
                </div>
                <p className="text-sm text-white/70">{input.description}</p>

                {input.type === 'select' && input.options ? (
                  <Select
                    options={input.options}
                    value={queryParams[input.name] || ''}
                    placeholder={input.placeholder || 'Select value'}
                    onChange={(value) => onQueryParamChange(input.name, value)}
                  />
                ) : (
                  <Input
                    type={input.type === 'number' ? 'number' : 'text'}
                    value={queryParams[input.name] || ''}
                    placeholder={input.placeholder || 'Enter value'}
                    onChange={(e) =>
                      onQueryParamChange(input.name, e.target.value)
                    }
                    required={input.required}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {endpoint.responses && endpoint.responses.length > 0 && (
        <div className="mt-8 flex flex-col gap-4">
          <h2 className="text-lg">Responses</h2>
          <div className="flex flex-col gap-4">
            {endpoint.responses.map((response, index) => (
              <div
                key={index}
                className="border-gray-lightest flex flex-col gap-2 border p-4"
              >
                <div className="flex items-center gap-2">
                  <span
                    data-status={response.status}
                    // prettier-ignore
                    className={`
                      rounded px-2 py-1 font-mono text-sm border
                      data-[status='200']:border-green-900
                      data-[status='200']:text-green-200
                      data-[status='400']:border-yellow-900
                      data-[status='400']:text-yellow-200
                      data-[status='401']:border-red-900
                      data-[status='401']:text-red-200
                      data-[status='404']:border-red-900
                      data-[status='404']:text-red-200
                      data-[status='500']:border-red-900
                      data-[status='500']:text-red-200`}
                  >
                    {response.status}
                  </span>
                  <span className="text-sm text-white/80">
                    {response.description}
                  </span>
                </div>
                {response.example && (
                  <pre className="border-gray-lightest bg-gray-dark overflow-x-auto border p-2 text-xs text-white/80">
                    {JSON.stringify(response.example, null, 2)}
                  </pre>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
