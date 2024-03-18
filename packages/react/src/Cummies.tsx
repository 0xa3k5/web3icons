import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCummies = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.449 8.143h-2.306l.591-1.714H10.65L7.5 14.143h1.12l.81-1.715h2.34l-.789 1.83-1.65 1.17H5.773l-.63-1.17 3.129-7.945 1.585-1.17h3.592l.694 1.17z"
          />
          <path
            fill="currentColor"
            d="m16.59 16.05-1.234.626.626.943-.54 1.238h-2.233l.72-1.714h-1.114l-.69 1.714H9.857L13.75 9.43h4.294l.814 1.238zm-2.841-1.029c-.017-.098-.035-.175-.03-.218.017-.133.03-.163.257-.275-.197-.085-.159-.33-.112-.437-.124.03-.407.12-.574.245-.055-.506.365-.746.583-.806-.051-.082-.064-.463.296-1.35.36-.883 1.298-1.346 1.723-1.466.231.407.604 1.44.244 2.323-.36.887-.643 1.14-.737 1.157.12.206.261.69-.137.994a2 2 0 0 0-.258-.6c-.042.108-.184.305-.394.215.09.248.082.278 0 .385-.03.035-.094.073-.18.13-.18.106-.441.265-.63.54.04-.28.022-.564-.051-.837"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CUMMIES__a)"
            d="M13.448 8.143h-2.305l.591-1.714H10.65L7.5 14.143h1.118l.81-1.715h2.34l-.788 1.83-1.65 1.17H5.773l-.63-1.17L8.27 6.313l1.586-1.17h3.591l.695 1.17z"
          />
          <path
            fill="url(#CUMMIES__b)"
            d="m16.59 16.05-1.235.626.626.943-.54 1.238h-2.233l.72-1.714h-1.114l-.69 1.714H9.857l3.891-9.428h4.295l.814 1.238zm-2.842-1.029c-.017-.098-.034-.175-.03-.218.017-.133.03-.163.257-.275-.197-.085-.158-.33-.111-.437-.124.03-.407.12-.574.245-.056-.506.364-.746.583-.806-.052-.082-.065-.463.295-1.35.36-.883 1.299-1.346 1.723-1.466.232.407.604 1.44.244 2.323-.36.887-.642 1.14-.737 1.157.12.206.262.69-.137.994a2 2 0 0 0-.257-.6c-.043.108-.184.305-.394.215.09.248.081.278 0 .385-.03.035-.095.073-.18.13-.18.106-.442.265-.63.54a2.1 2.1 0 0 0-.052-.837"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="CUMMIES__a"
              x1="8.326"
              x2="15.551"
              y1="6.367"
              y2="17.388"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F000E1" />
              <stop offset=".38" stopColor="#FD00B3" />
              <stop offset=".74" stopColor="#F0A" />
              <stop offset="1" stopColor="#D517D1" />
            </linearGradient>
            <linearGradient
              id="CUMMIES__b"
              x1="8.326"
              x2="15.551"
              y1="6.367"
              y2="17.388"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F000E1" />
              <stop offset=".38" stopColor="#FD00B3" />
              <stop offset=".74" stopColor="#F0A" />
              <stop offset="1" stopColor="#D517D1" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCummies.displayName = 'Cummies'

export default IconCummies
