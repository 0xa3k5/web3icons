import Link from 'next/link'
import Logo from './logo'
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
            <Logo className="size-12" />
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
