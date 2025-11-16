'use client'
import Link from 'next/link'
import { Web3IconLogo } from '@web3icons/react'
import { Button } from './button'
import { Breadcrumb } from './breadcrumbs'
import cx from 'classnames'

interface Props {
  className?: string
}

export function Header({ className }: Props) {
  return (
    <div
      className={cx(
        'border-gray-lightest mx-auto flex w-screen justify-center border-b py-2',
        className,
      )}
    >
      <div className="container flex w-full items-center justify-between gap-4">
        <div className="flex items-center">
          <Link href="/">
            <Web3IconLogo size={48} />
          </Link>
          <Breadcrumb className="hidden md:flex" />
        </div>

        <div className="flex items-center gap-4">
          <Link href="/docs">
            <Button variant="ghost" size="sm">
              docs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
