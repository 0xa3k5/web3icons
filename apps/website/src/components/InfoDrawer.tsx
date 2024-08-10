'use client'
import cx from 'classnames'
import {
  ITokenMetadata,
  INetworkMetadata,
  IWalletMetadata,
  TVariant,
} from '@web3icons/core'
import { Drawer } from 'vaul'
import { CodeBlock } from './CodeBlock'
import { useWeb3Icon } from '../hooks/useWeb3Icon'
import { scaffoldComponent } from '../utils/jsx-scaffold'
import { useAppContext } from '../hooks'
import SegmentedControl from './ControlBar/SegmentedControl'
import { useState } from 'react'

export function InfoDrawer({
  metadata,
}: {
  metadata: ITokenMetadata | INetworkMetadata | IWalletMetadata
}) {
  const segmentedOpts = ['dynamic', 'individual']
  const [selectedTab, setSelectedTab] = useState(segmentedOpts[0]!)
  const { type, variant } = useAppContext()

  return (
    <Drawer.Portal>
      <Drawer.Overlay className="fixed inset-0 bg-gray-darkest/40" />
      <Drawer.Content className="fixed bottom-0 z-10  flex h-[40vh] w-full select-text justify-center">
        <div className="grid w-2/3 select-text grid-cols-6 gap-4 overflow-x-clip overflow-y-scroll rounded-md border border-gray-lightest bg-gray p-4">
          <div className="col-span-2 flex flex-col gap-4 p-2">
            <Drawer.Title className="flex items-center gap-2">
              {useWeb3Icon({ metadata, variant, size: 32 })}
              {metadata.name}
            </Drawer.Title>
            <dl className="flex flex-col text-xs">
              {Object.entries(metadata).map(([key, value]) => (
                <DescItem key={key} label={key} value={value} className="" />
              ))}
            </dl>
          </div>
          <div className="col-span-4 flex flex-col gap-2">
            <SegmentedControl
              options={segmentedOpts}
              selected={selectedTab}
              onChange={(value) => setSelectedTab(value as string)}
            />
            <CodeBlock
              key={variant}
              title="react"
              code={scaffoldComponent({
                metadata,
                type,
                variant,
                dynamic: selectedTab === 'dynamic',
              })}
              language="tsx"
            />
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Portal>
  )
}

const DescItem = ({
  label,
  value,
  className,
}: {
  label: string
  value: any
  className?: string
}): JSX.Element => {
  return (
    <span
      className={cx(
        'flex items-center justify-between border-b border-gray-lightest py-2 last-of-type:border-0',
        className,
      )}
    >
      <dt className="capitalize text-white/40">{label}</dt>
      <dd>{renderValue(value)}</dd>
    </span>
  )
}

const renderValue = (value: any): React.ReactNode => {
  if (Array.isArray(value)) {
    return value.map((v) => v.toString()).join(', ')
  }

  if (typeof value === 'object' && value !== null) {
    return renderObject(value)
  }

  return String(value)
}

const renderObject = (obj: Record<string, any>): React.ReactNode => {
  return Object.entries(obj).length
}
