import React, { forwardRef } from 'react'
import cx from 'classnames'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'onChange'
> {
  options: SelectOption[] | string[]
  label?: string
  error?: string
  helperText?: string
  placeholder?: string
  containerClassName?: string
  onChange?: (value: string) => void
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      containerClassName,
      label,
      error,
      helperText,
      options,
      placeholder,
      id,
      required,
      onChange,
      ...props
    },
    ref,
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`

    const normalizedOptions: SelectOption[] = options.map((option) =>
      typeof option === 'string' ? { value: option, label: option } : option,
    )

    return (
      <div className={cx('w-full', containerClassName)}>
        {label && (
          <label
            htmlFor={selectId}
            className="mb-2 block text-sm font-medium text-white/80"
          >
            {label}
            {required && <span className="ml-1 text-red-400">*</span>}
          </label>
        )}

        <select
          ref={ref}
          id={selectId}
          className={cx(
            'border-gray-lightest bg-gray w-full border px-3 py-2 text-sm text-white focus:border-white/40 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-red-400 focus:border-red-400',
            className,
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={
            error
              ? `${selectId}-error`
              : helperText
                ? `${selectId}-helper`
                : undefined
          }
          required={required}
          onChange={(e) => onChange?.(e.target.value)}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {normalizedOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {error && (
          <p
            id={`${selectId}-error`}
            className="mt-1 text-sm text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={`${selectId}-helper`} className="mt-1 text-sm text-white/60">
            {helperText}
          </p>
        )}
      </div>
    )
  },
)

Select.displayName = 'Select'

export { Select }
