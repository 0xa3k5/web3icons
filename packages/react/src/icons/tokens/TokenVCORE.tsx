import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenVCORE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.285 12a7.286 7.286 0 1 1-14.571 0 7.286 7.286 0 0 1 14.571 0m-6.453-4.286h1.714l-1.209 3 3.806-1.213v1.638l-2.7.86 2.7.858V14.5l-3.72-1.192 1.2 2.979H12.91L12 14.036l-.908 2.25H9.377l1.235-3.06-3.755 1.2v-1.637l2.473-.793-2.473-.789V9.57l3.84 1.23-1.242-3.086h1.714L12 9.776z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M18.887 14.378a7.3 7.3 0 0 1-2.318 3.3c-.729-.72-1.402-2.4-.575-3.342.802-.913 2.186-.395 2.893.042m-9.9 4.256a7.3 7.3 0 0 1-3.566-3.497c.575-.214 1.535-.274 2.482.579 1.063.96 1.234 2.232 1.084 2.918M6.883 6.814c.6.266 1.384.472 1.971.176l.51-.262c.57-.3.703-.372 1.187-.257.228.056.412.202.6.347.309.245.63.498 1.183.373.797-.18 2.195-1.093 2.195-2.027A7.27 7.27 0 0 0 6.883 6.81z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#VCORE__a)"
            d="M19.285 12a7.286 7.286 0 1 1-14.571 0 7.286 7.286 0 0 1 14.571 0m-6.453-4.286h1.714l-1.209 3 3.806-1.213v1.638l-2.7.861 2.7.857V14.5l-3.72-1.192 1.2 2.979H12.91L12 14.036l-.908 2.25H9.377l1.235-3.06-3.755 1.2v-1.637l2.473-.793-2.473-.789V9.57l3.84 1.23-1.242-3.086h1.714L12 9.776z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#VCORE__b)"
            d="M18.887 14.379a7.3 7.3 0 0 1-2.319 3.3c-.728-.72-1.401-2.4-.574-3.343.802-.913 2.186-.395 2.893.043"
          />
          <path
            fill="#C49D41"
            d="M8.988 18.634a7.3 7.3 0 0 1-3.566-3.497c.574-.214 1.534-.274 2.481.579 1.063.96 1.235 2.233 1.085 2.918"
          />
          <path
            fill="#B38B3E"
            d="M6.883 6.814c.6.266 1.384.472 1.971.176l.51-.262c.57-.3.703-.372 1.187-.257.227.056.412.202.6.347.309.245.63.498 1.183.373.797-.18 2.194-1.093 2.194-2.027A7.27 7.27 0 0 0 6.884 6.81z"
          />
          <defs>
            <linearGradient
              id="VCORE__a"
              x1="5.164"
              x2="18.501"
              y1="12.377"
              y2="10.303"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D3A955" />
              <stop offset=".24" stopColor="#CEA651" />
              <stop offset=".46" stopColor="#FFD57E" />
              <stop offset=".75" stopColor="#FBD072" />
              <stop offset="1" stopColor="#FCC766" />
            </linearGradient>
            <linearGradient
              id="VCORE__b"
              x1="15.613"
              x2="18.66"
              y1="14.302"
              y2="16.62"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BC8E3A" />
              <stop offset="1" stopColor="#79622D" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenVCORE.displayName = 'VCORE'
