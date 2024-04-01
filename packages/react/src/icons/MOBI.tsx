import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconMOBI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.913 8.571c-2.645.055-3.395 2.154-3.454 3.195l.432.132c1.314-1.792 3.242-1.003 4.096-.52 1.095.618 3.688 2.077 5.3 2.964s3.285 1.094 3.92 1.086c2.558-.108 3.183-2.361 3.33-3.417l-.351-.249c-.859 1.992-3.278 1.298-4.38.702-1.125-.642-3.741-2.118-5.213-2.897s-3.067-.988-3.68-.996"
          />
          <path
            fill="currentColor"
            d="M20.306 12.914c-.313-1.68-2.096-2.1-2.948-2.1-.745-.044-2.105.058-3.449.561l-1.066-.59c1.754-1.629 3.702-1.98 4.515-1.938 3.582.231 3.458 2.808 2.948 4.067m-13.64 2.275c-3.433-.093-3.47-2.763-3.06-4.087.493 1.697 2.246 2.147 3.06 2.16a10.8 10.8 0 0 0 3.376-.717l1.173.653c-1.694 1.612-3.713 2.003-4.55 1.99"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MOBI__a)"
            d="M6.914 8.571c-2.646.055-3.395 2.154-3.454 3.195l.431.132c1.314-1.792 3.242-1.003 4.096-.52 1.095.618 3.688 2.077 5.3 2.964s3.286 1.094 3.92 1.086c2.559-.108 3.183-2.361 3.33-3.417l-.35-.249c-.86 1.992-3.279 1.298-4.38.702-1.125-.642-3.742-2.118-5.214-2.897-1.471-.778-3.066-.988-3.68-.996"
          />
          <path
            fill="url(#MOBI__b)"
            d="M20.306 12.914c-.313-1.68-2.096-2.1-2.947-2.1-.746-.044-2.105.058-3.45.561l-1.065-.59c1.754-1.629 3.701-1.98 4.515-1.938 3.582.231 3.457 2.808 2.947 4.067"
          />
          <path
            fill="url(#MOBI__c)"
            d="M6.666 15.189c-3.432-.093-3.47-2.763-3.06-4.087.493 1.697 2.246 2.147 3.06 2.16a10.8 10.8 0 0 0 3.377-.717l1.173.653c-1.695 1.612-3.713 2.003-4.55 1.99"
          />
          <defs>
            <linearGradient
              id="MOBI__a"
              x1="3.4"
              x2="20.58"
              y1="11.248"
              y2="12.76"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D1E8F7" />
              <stop offset=".516" stopColor="#EEF3FC" />
              <stop offset="1" stopColor="#D9DCF8" />
            </linearGradient>
            <linearGradient
              id="MOBI__b"
              x1="4.315"
              x2="20.463"
              y1="12.325"
              y2="14.47"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#99B8ED" />
              <stop offset="1" stopColor="#F0F2FC" />
            </linearGradient>
            <linearGradient
              id="MOBI__c"
              x1="3.429"
              x2="10.518"
              y1="11.611"
              y2="13.053"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCFEFF" />
              <stop offset="1" stopColor="#95B7EC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMOBI.displayName = 'MOBI'
