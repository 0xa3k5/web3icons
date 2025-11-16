'use client'
import { useRouter } from 'next/navigation'
import { tokens, networks, wallets, exchanges, TType } from '@web3icons/common'
import { Drawer } from '../../../../components'

const metadataMap = {
  token: tokens,
  network: networks,
  wallet: wallets,
  exchange: exchanges,
}

export default function Modal({ params }: { params: { type: TType; id: string } }) {
  const router = useRouter()
  const { type, id } = params

  const metadataList = metadataMap[type]

  if (!metadataList) {
    router.back()
    return null
  }

  const metadata = metadataList.find((item: any) => {
    if (type === 'token') {
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
