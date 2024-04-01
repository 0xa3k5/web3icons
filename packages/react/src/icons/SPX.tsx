import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSPX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m0 .429a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m11.087 12.146.515 2.828a3.4 3.4 0 0 1-1.93-.887c-.342-.313-.848-.441-1.242-.201-.42.248-.548.801-.223 1.157a5.13 5.13 0 0 0 3.707 1.671l.103.579a.858.858 0 0 0 1.689-.3l-.095-.536a5.14 5.14 0 0 0 3.48-5.635c-.11-.78-.908-1.196-1.688-1.072-2.242.36-4.483.686-6.733 1.029a3.43 3.43 0 0 1 5.109-2.143c.33.201.741.257 1.075.073.515-.279.635-.965.159-1.307a5.142 5.142 0 0 0-8.156 4.17c0 .685.664 1.13 1.346 1.028.956-.15 1.894-.304 2.884-.454m1.697-.257 2.645-.395v.078a3.43 3.43 0 0 1-2.13 3.17l-.515-2.85z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SPX__a)"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713m0 .429a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#SPX__b)"
            d="m11.087 12.146.514 2.828a3.4 3.4 0 0 1-1.929-.887c-.342-.313-.848-.441-1.242-.201-.42.248-.549.801-.223 1.157a5.13 5.13 0 0 0 3.707 1.671l.103.579a.858.858 0 0 0 1.688-.3l-.094-.536a5.14 5.14 0 0 0 3.48-5.635c-.111-.78-.909-1.196-1.689-1.072-2.241.36-4.482.686-6.732 1.029a3.43 3.43 0 0 1 5.108-2.143c.33.201.742.257 1.076.073.514-.279.634-.965.158-1.307a5.142 5.142 0 0 0-8.155 4.17c0 .685.664 1.13 1.345 1.028.956-.15 1.895-.304 2.885-.454m1.697-.257 2.644-.395v.078a3.43 3.43 0 0 1-2.13 3.17l-.514-2.85z"
          />
          <defs>
            <linearGradient
              id="SPX__a"
              x1="4.928"
              x2="19.285"
              y1="12.643"
              y2="13.072"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FD00FF" />
              <stop offset="1" stopColor="#0BF2FE" />
            </linearGradient>
            <linearGradient
              id="SPX__b"
              x1="8.357"
              x2="15.857"
              y1="8.785"
              y2="14.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0BF1FF" />
              <stop offset="1" stopColor="#F903FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSPX.displayName = 'SPX'
