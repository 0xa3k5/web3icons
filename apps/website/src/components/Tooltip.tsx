// import cx from 'classnames'

// interface Props {
//   className?: string
//   toggle: boolean
//   text: string
// }

// export default function Tooltip({
//   className,
//   toggle,
//   text,
// }: Props): JSX.Element {
//   return (
//     <span
//       className={cx(
//         className,
//         'absolute bottom-2 z-20 rounded-md border border-gray-lightest bg-gray-darkest px-4 py-2 text-xs transition-all duration-150',
//         toggle
//           ? 'inline-flex -translate-y-8 opacity-100 '
//           : 'hidden translate-y-0 opacity-0',
//       )}
//     >
//       {text}
//     </span>
//   )
// }

import cx from 'classnames'
import { useState, useEffect } from 'react'

interface TooltipProps {
  text: string
  toggle: boolean
  position?: 'top' | 'right' | 'bottom' | 'left'
  className?: string
}

export default function Tooltip({
  text,
  toggle,
  position = 'top',
  className,
}: TooltipProps): JSX.Element | null {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (toggle) {
      setVisible(true)
      const timer = setTimeout(() => setVisible(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [toggle])

  if (!visible) return null

  return (
    <div
      className={cx(
        'absolute z-10 rounded-md border border-gray-lightest bg-gray-darkest px-2 py-1 text-xs',
        {
          'bottom-full left-1/2 mb-2 -translate-x-1/2 transform':
            position === 'top',
          'left-1/2 top-full mt-2 -translate-x-1/2 transform':
            position === 'bottom',
        },
        className,
      )}
    >
      {text}
    </div>
  )
}
