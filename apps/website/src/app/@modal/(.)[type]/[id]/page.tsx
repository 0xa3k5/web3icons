'use client'
import { useRouter } from 'next/navigation'
import {
  tokens,
  networks,
  wallets,
  exchanges,
  TType,
  TMetadata,
} from '@web3icons/common'
import { Drawer } from '../../../../components'

const metadataMap: Record<TType, TMetadata[]> = {
  token: tokens,
  network: networks,
  wallet: wallets,
  exchange: exchanges,
}

export default function Modal({
  params,
}: {
  params: { type: `${TType}s`; id: string }
}) {
  const router = useRouter()
  const { type, id } = params
  const web3Type = type.slice(0, -1) as TType
  const metadataList = metadataMap[web3Type]

  if (!metadataList) {
    router.back()
    return null
  }

  const metadata = metadataList.find((item: any) => {
    if (web3Type === 'token') {
      return item.symbol?.toUpperCase() === id.toUpperCase()
    }
    return item.id === id.toLowerCase()
  })

  if (!metadata) {
    router.back()
    return null
  }

  return (
    <Drawer
      metadata={metadata}
      isOpen={true}
      setIsOpen={(open) => {
        if (!open) {
          router.back()
        }
      }}
    />
  )
}
