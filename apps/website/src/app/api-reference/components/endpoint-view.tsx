'use client'

import { useState, useEffect } from 'react'
import { IEndpoint } from '../../../utils/open-api-parser'
import { Documentation } from './documentation'
import { ApiPlayground } from './api-playground'

interface Props {
  endpoint: IEndpoint
}

export function EndpointView({ endpoint }: Props) {
  const [apiKey, setApiKey] = useState('')
  const [queryParams, setQueryParams] = useState<Record<string, string>>({})

  useEffect(() => {
    const initial: Record<string, string> = {}

    if (endpoint.defaultQueryParams) {
      Object.assign(initial, endpoint.defaultQueryParams)
    }

    if (endpoint.inputs) {
      endpoint.inputs.forEach((input) => {
        if (input.defaultValue) {
          initial[input.name] = input.defaultValue
        }
      })
    }

    setQueryParams(initial)
  }, [endpoint])

  const handleQueryParamChange = (name: string, value: string) => {
    setQueryParams((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <Documentation
        endpoint={endpoint}
        queryParams={queryParams}
        onQueryParamChange={handleQueryParamChange}
        className="col-span-6"
      />
      <ApiPlayground
        apiKey={apiKey}
        endpoint={endpoint}
        queryParams={queryParams}
        onApiKeyChange={setApiKey}
        className="col-span-4"
      />
    </>
  )
}
