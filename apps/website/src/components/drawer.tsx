'use client'
import { Drawer as _Drawer } from 'vaul'
import { scaffoldComponent } from '../utils/jsx-scaffold'
import { useAppContext } from '../hooks'
import { PropsWithChildren, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ITokenMetadata, TMetadata, TVariant } from '@web3icons/common'
import { fetchSvgContent } from '../utils/fetch-svg-content'
import { CodeBlock, DescriptionList, Web3Icon } from '.'
import classNames from 'classnames'

interface Props {
  metadata: TMetadata
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function Drawer({ metadata, isOpen, setIsOpen }: Props) {
  const { type, variant, size, color } = useAppContext()
  const [drawerVariant, setDrawerVariant] = useState<TVariant>(variant)
  const router = useRouter()
  const pathname = usePathname()

  const [tabContents, setTabContents] = useState<any>('')

  useEffect(() => {
    const pathParts = pathname.split('/').filter(Boolean)
    const urlId = pathParts[1]

    if (urlId) {
      if (type === 'token') {
        if (
          urlId.toUpperCase() ===
          (metadata as ITokenMetadata).symbol?.toUpperCase()
        ) {
          setIsOpen(true)
        }
      } else {
        if (urlId.toLowerCase() === metadata.id.toLowerCase()) {
          setIsOpen(true)
        }
      }
    }
  }, [pathname, metadata, type])

  const handleOpen = () => {
    const iconFileName =
      type === 'token'
        ? (metadata as ITokenMetadata).symbol?.toUpperCase() || metadata.id
        : metadata.id.toLowerCase()

    router.push(`/${type}s/${iconFileName}`)
    setIsOpen(true)
  }

  useEffect(() => {
    ;(async () => {
      const { svg } = await fetchSvgContent({
        metadata,
        variant: drawerVariant,
      })
      setTabContents({
        svg: svg,
        dynamic: scaffoldComponent({
          metadata,
          type,
          variant: drawerVariant,
          size,
          color,
          dynamic: true,
        }),
        individual: scaffoldComponent({
          metadata,
          type,
          variant: drawerVariant,
          size,
          color,
        }),
      })
    })()
  }, [drawerVariant])

  return (
    <_Drawer.Root
      direction="right"
      open={isOpen}
      onOpenChange={(open) => (open ? handleOpen() : setIsOpen(false))}
    >
      <_Drawer.Portal>
        <_Drawer.Overlay className="z-100 fixed inset-0 bg-black/50" />
        <_Drawer.Content className="z-100 fixed right-0 top-0 flex h-full w-[80dvw] shrink-0 md:w-[60vw] xl:w-[30vw]">
          <div className="border-gray-lightest bg-gray flex size-full shrink-0 select-text flex-col gap-4 overflow-y-scroll rounded-md border p-2 focus-visible:outline-none">
            <div className="flex flex-col gap-4">
              <div className="border-gray-lightest relative flex w-full items-center justify-center border-b py-16">
                <Web3Icon
                  metadata={metadata}
                  variant={drawerVariant}
                  size={96}
                  className=""
                  type={type}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
              </div>
              <div className="flex flex-col gap-4 p-4">
                <_Drawer.Title className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-lg">{metadata.name}</span>
                    <span className="text-sm capitalize text-white/40">
                      {type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {(['branded', 'mono', 'background'] as TVariant[]).map(
                      (v) => (
                        <label
                          key={v}
                          data-current={drawerVariant === v}
                          className={classNames(
                            'flex items-center gap-2 overflow-hidden rounded-md border border-transparent',
                            'data-[current=true]:border-white/30',
                          )}
                        >
                          <input
                            type="radio"
                            name="variant"
                            value={v}
                            checked={drawerVariant === v}
                            onChange={() => setDrawerVariant(v)}
                            className="sr-only"
                          />
                          <Web3Icon
                            type={type}
                            metadata={metadata}
                            variant={v}
                            size={40}
                          />
                        </label>
                      ),
                    )}
                  </div>
                </_Drawer.Title>
                <CodeBlock
                  tabs={[
                    {
                      label: 'Individual',
                      content: tabContents.individual,
                      language: 'tsx',
                    },
                    {
                      label: 'Dynamic',
                      content: tabContents.dynamic,
                      language: 'tsx',
                    },
                    {
                      label: 'SVG',
                      content: tabContents.svg,
                      language: 'html',
                    },
                  ]}
                />
                <DescriptionList>
                  {Object.entries(metadata).map(([key, value]) => (
                    <DescriptionList.Item key={key} label={key} value={value} />
                  ))}
                </DescriptionList>
                <span className="text-sm text-white/40">
                  Found an issue with the icon?{' '}
                  <a
                    href="https://github.com/0xa3k5/web3icons/issues"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#4C9EFF] hover:underline"
                  >
                    Report it on Github
                  </a>
                </span>
              </div>
            </div>
          </div>
        </_Drawer.Content>
      </_Drawer.Portal>
    </_Drawer.Root>
  )
}

Drawer.Trigger = ({ children }: PropsWithChildren) => (
  <_Drawer.Trigger asChild>{children}</_Drawer.Trigger>
)
