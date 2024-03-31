import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconLING = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.44 6.857c-.939 0-1.577.994-1.577 1.851 0 .223.043.429.094.588-.728 1.795-1.671 3.882-1.671 5.85 0 .9.488 1.997 1.53 1.997 1.457 0 2.871-1.963 3.63-3 .827.171 1.714.441 2.554.428.844.013 1.727-.257 2.554-.428.724.985 2.164 3 3.63 3 1.042 0 1.53-1.098 1.53-1.998 0-1.97-.943-4.054-1.671-5.85a2 2 0 0 0 .094-.587c0-.857-.643-1.851-1.577-1.851-.553 0-.879.15-1.307.351l-.146.065c-.994-.159-2.036-.416-3.107-.416s-2.113.257-3.107.416l-.146-.065c-.428-.201-.754-.351-1.307-.351M12 8.143c-1.072 0-2.07.094-3.056.308a.55.55 0 0 1-.343-.034l-.398-.171c-.382-.176-.472-.22-.763-.22-.274 0-.429.472-.429.687 0 .097.02.194.06.283a.59.59 0 0 1 .035.527c-.729 1.77-1.535 3.677-1.535 5.623 0 .214.065.71.386.71 1.037-.016 2.289-2.056 2.786-2.76a.56.56 0 0 1 .595-.226c.763.184 1.99.403 2.662.416.673-.013 1.899-.232 2.661-.416a.57.57 0 0 1 .6.227c.626.9 1.488 2.734 2.786 2.76.317 0 .381-.493.381-.711 0-1.946-.805-3.858-1.534-5.623a.59.59 0 0 1 .035-.527.7.7 0 0 0 .064-.288c0-.21-.159-.681-.429-.681-.296 0-.386.043-.771.214l-.39.176a.56.56 0 0 1-.343.034A14.3 14.3 0 0 0 12 8.143"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M9.429 9.857a.429.429 0 0 0-.858 0v1.714a.429.429 0 1 0 .857 0z"
          />
          <path
            fill="currentColor"
            d="M9.857 11.143a.428.428 0 1 0 0-.857H8.143a.429.429 0 0 0 0 .857zm4.929.428a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#LING__a)"
            d="M7.44 6.857c-.938 0-1.577.994-1.577 1.851 0 .223.043.429.095.588-.729 1.795-1.672 3.882-1.672 5.85 0 .9.489 1.997 1.53 1.997 1.457 0 2.872-1.963 3.63-3 .827.171 1.714.441 2.554.428.845.013 1.728-.257 2.555-.428.724.985 2.164 3 3.63 3 1.041 0 1.53-1.098 1.53-1.998 0-1.97-.943-4.054-1.672-5.85a2 2 0 0 0 .095-.587c0-.857-.643-1.851-1.578-1.851-.552 0-.878.15-1.307.351l-.145.065c-.995-.159-2.036-.416-3.108-.416-1.071 0-2.112.257-3.107.416l-.145-.065c-.429-.201-.755-.351-1.308-.351M12 8.143c-1.071 0-2.07.094-3.055.308a.55.55 0 0 1-.343-.034l-.399-.171c-.381-.176-.471-.22-.763-.22-.274 0-.428.472-.428.687 0 .097.02.194.06.283a.59.59 0 0 1 .034.527c-.728 1.77-1.534 3.677-1.534 5.623 0 .214.064.71.386.71 1.037-.016 2.288-2.056 2.785-2.76a.56.56 0 0 1 .596-.226c.763.184 1.989.403 2.661.416.673-.013 1.899-.232 2.662-.416a.57.57 0 0 1 .6.227c.626.9 1.487 2.734 2.786 2.76.317 0 .381-.493.381-.711 0-1.946-.806-3.858-1.534-5.623a.59.59 0 0 1 .034-.527.7.7 0 0 0 .064-.288c0-.21-.158-.681-.428-.681-.296 0-.386.043-.772.214l-.39.176a.56.56 0 0 1-.343.034A14.3 14.3 0 0 0 12 8.143"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#9410ED"
            d="M9.429 9.857a.429.429 0 0 0-.857 0v1.714a.429.429 0 1 0 .857 0z"
          />
          <path
            fill="#9410ED"
            d="M9.858 11.143a.428.428 0 1 0 0-.857H8.143a.429.429 0 0 0 0 .857z"
          />
          <path
            fill="#7024E7"
            d="M14.786 11.571a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"
          />
          <defs>
            <linearGradient
              id="LING__a"
              x1="12"
              x2="12"
              y1="6.857"
              y2="17.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B202FB" />
              <stop offset="1" stopColor="#3741D7" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconLING.displayName = 'LING'