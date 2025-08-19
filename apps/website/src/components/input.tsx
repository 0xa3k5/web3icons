import React, { forwardRef } from 'react'
import cx from 'classnames'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  iconBefore?: React.ReactNode
  iconAfter?: React.ReactNode
  containerClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      label,
      error,
      helperText,
      iconBefore,
      iconAfter,
      id,
      required,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`

    return (
      <div className={cx('w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium text-white/80"
          >
            {label}
            {required && <span className="ml-1 text-red-400">*</span>}
          </label>
        )}

        <div className="relative">
          {iconBefore && (
            <div className="absolute top-1/2 left-3 -translate-y-1/2 text-white/60">
              {iconBefore}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cx(
              'border-gray-lightest bg-gray w-full border px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/40 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
              !!iconBefore && 'pl-10',
              !!iconAfter && 'pr-10',
              !!error && 'border-red-400 focus:border-red-400',
              className,
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            required={required}
            {...props}
          />

          {iconAfter && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2 text-white/60">
              {iconAfter}
            </div>
          )}
        </div>

        {error && (
          <p
            id={`${inputId}-error`}
            className="mt-1 text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${inputId}-helper`} className="mt-1 text-sm text-white/60">
            {helperText}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
