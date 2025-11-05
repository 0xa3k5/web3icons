'use client'

import { forwardRef } from 'react'
import cx from 'classnames'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'destructive'
  | 'link'
  | 'icon'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  iconBefore?: React.ReactNode
  iconAfter?: React.ReactNode
  fullWidth?: boolean
  className?: string
  children?: React.ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'secondary',
      size = 'md',
      loading = false,
      iconBefore: iconBefore,
      iconAfter: iconAfter,
      fullWidth = false,
      className,
      disabled,
      children,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        data-variant={variant}
        data-size={size}
        data-loading={loading}
        data-full-width={fullWidth}
        className={cx(
          'data-[loading=true]:cursor-wait',
          'data-[full-width=true]:w-full',
          'inline-flex items-center justify-center gap-2',
          'font-mono text-sm transition-all duration-150',
          'focus-within:outline-none focus-within:ring-0 focus:outline-none focus:ring-0',
          'disabled:pointer-events-none disabled:opacity-50',

          'data-[size=xs]:rounded-sm data-[size=xs]:px-2 data-[size=xs]:py-1 data-[size=xs]:text-xs',
          'data-[size=sm]:rounded-md data-[size=sm]:px-3 data-[size=sm]:py-1.5 data-[size=sm]:text-xs',
          'data-[size=md]:rounded-md data-[size=md]:px-4 data-[size=md]:py-2 data-[size=md]:text-sm',
          'data-[size=lg]:rounded-lg data-[size=lg]:px-6 data-[size=lg]:py-3 data-[size=lg]:text-base',

          'data-[variant=primary]:bg-primary data-[variant=primary]:text-white',
          'data-[variant=primary]:hover:bg-primary/80',
          'data-[variant=primary]:active:bg-primary/70',

          'data-[variant=secondary]:border-gray-lightest data-[variant=secondary]:border',
          'data-[variant=secondary]:bg-transparent data-[variant=secondary]:text-white',
          'data-[variant=secondary]:hover:bg-gray-dark data-[variant=secondary]:hover:border-white/40',
          'data-[variant=secondary]:active:bg-gray-lightest/10',

          'data-[variant=ghost]:bg-transparent data-[variant=ghost]:text-white/60',
          'data-[variant=ghost]:hover:bg-white/5 data-[variant=ghost]:hover:text-white',
          'data-[variant=ghost]:active:bg-white/10',

          'data-[variant=destructive]:bg-transparent data-[variant=destructive]:text-red-400',
          'data-[variant=destructive]:hover:bg-red-400/10 data-[variant=destructive]:hover:text-red-300',
          'data-[variant=destructive]:active:bg-red-400/20',

          'data-[variant=link]:text-primary data-[variant=link]:bg-transparent',
          'data-[variant=link]:hover:text-primary/80 data-[variant=link]:hover:underline',
          'data-[variant=link]:active:text-primary/70',
          'data-[variant=link]:px-0 data-[variant=link]:py-0',

          'data-[variant=icon]:p-1 data-[variant=icon]:text-white/40',
          'data-[variant=icon]:hover:bg-white/5 data-[variant=icon]:hover:text-white',
          'data-[variant=icon]:active:bg-white/10',
          'data-[variant=icon]:focus:ring-1',

          className,
        )}
        {...props}
      >
        {iconBefore && (
          <span
            className={cx(
              'shrink-0',
              'data-[loading=true]:data-[variant=icon]:hidden',
            )}
          >
            {iconBefore}
          </span>
        )}

        {loading && (
          <span className="shrink-0">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="32"
                strokeDashoffset="32"
                className="opacity-25"
              />
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8"
                strokeDashoffset="24"
                className="opacity-75"
              />
            </svg>
          </span>
        )}

        {children && (
          <span
            className={cx('data-[loading=true]:data-[variant=icon]:sr-only')}
          >
            {children}
          </span>
        )}

        {iconAfter && (
          <span
            className={cx(
              'shrink-0',
              'data-[loading=true]:data-[variant=icon]:hidden',
            )}
          >
            {iconAfter}
          </span>
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
