import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconINS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.056 17.565v.436h.439l1.415-1.527v-.436h-.44zm4.118.436.697-1.54v-.423h-.453l-.697 1.54v.424zm7.828-3.579v-.45l-1.482-.796h-.427v.45l1.482.796zm0-4.392v-.45h-.427l-1.482.796v.45h.427zM9.72 6v.424l.697 1.54h.454v-.425L10.174 6zm8.228.436V6h-.44l-1.414 1.527v.436h.439zm-4.233 3.85h-.429v.428h.428zm-.582 5.752v.424l.696 1.54h.454v-.425l-.697-1.539zM14.282 6h-.453l-.696 1.54v.424h.453l.696-1.54zm3.666 12.001v-.436l-1.415-1.527h-.44v.436l1.415 1.527zM6.002 13.972v.45h.426l1.482-.796v-.45h-.426zM6.056 6v.436L7.47 7.963h.44v-.436L6.495 6zm4.23 7.714h.428v-.428h-.428zM6.002 9.58v.45l1.482.796h.426v-.45l-1.482-.797zm4.284 1.134h.428v-.428h-.428zm3.429 2.572h-.429v.428h.428z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#INS__a)"
            d="M6.056 17.565v.436h.439l1.415-1.527v-.436h-.44z"
          />
          <path
            fill="url(#INS__b)"
            d="m10.174 18.001.697-1.54v-.423h-.453l-.697 1.54v.424z"
          />
          <path
            fill="url(#INS__c)"
            d="M18.002 14.422v-.45l-1.482-.796h-.427v.45l1.482.796z"
          />
          <path
            fill="url(#INS__d)"
            d="M18.002 10.03v-.45h-.427l-1.482.796v.45h.427z"
          />
          <path
            fill="url(#INS__e)"
            d="M9.72 6v.424l.697 1.54h.454v-.425L10.174 6z"
          />
          <path
            fill="url(#INS__f)"
            d="M17.948 6.436V6h-.44l-1.414 1.527v.436h.439z"
          />
          <path fill="#BE5095" d="M13.715 10.286h-.429v.428h.428z" />
          <path
            fill="url(#INS__g)"
            d="M13.133 16.038v.424l.696 1.54h.454v-.425l-.697-1.539z"
          />
          <path
            fill="url(#INS__h)"
            d="M14.282 6h-.453l-.696 1.54v.424h.453l.696-1.54z"
          />
          <path
            fill="url(#INS__i)"
            d="M17.948 18.001v-.436l-1.415-1.527h-.44v.436l1.415 1.527z"
          />
          <path
            fill="url(#INS__j)"
            d="M6.002 13.972v.45h.426l1.482-.796v-.45h-.426z"
          />
          <path
            fill="url(#INS__k)"
            d="M6.056 6v.436L7.47 7.963h.44v-.436L6.495 6z"
          />
          <path fill="#BD687B" d="M10.286 13.714h.428v-.428h-.428z" />
          <path
            fill="url(#INS__l)"
            d="M6.002 9.58v.45l1.482.796h.426v-.45l-1.482-.797z"
          />
          <path fill="#AC5E90" d="M10.286 10.714h.428v-.428h-.428z" />
          <path fill="#C85C7F" d="M13.715 13.286h-.429v.428h.428z" />
          <defs>
            <linearGradient
              id="INS__a"
              x1="18.002"
              x2="5.998"
              y1="6"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C27E64" />
              <stop offset="1" stopColor="#CD8D56" />
            </linearGradient>
            <linearGradient
              id="INS__b"
              x1="15.264"
              x2="6.004"
              y1="6.003"
              y2="17.999"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CB7365" />
              <stop offset="1" stopColor="#D57D56" />
            </linearGradient>
            <linearGradient
              id="INS__c"
              x1="6.002"
              x2="18.002"
              y1="6.004"
              y2="16.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D75080" />
              <stop offset="1" stopColor="#E34B76" />
            </linearGradient>
            <linearGradient
              id="INS__d"
              x1="5.635"
              x2="18.007"
              y1="16.599"
              y2="6.006"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CF4794" />
              <stop offset="1" stopColor="#D739A3" />
            </linearGradient>
            <linearGradient
              id="INS__e"
              x1="6.006"
              x2="16.613"
              y1="6"
              y2="17.996"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8554B2" />
              <stop offset="1" stopColor="#9C55A5" />
            </linearGradient>
            <linearGradient
              id="INS__f"
              x1="6.229"
              x2="18.005"
              y1="17.774"
              y2="6.004"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C43CAE" />
              <stop offset="1" stopColor="#CD2CC3" />
            </linearGradient>
            <linearGradient
              id="INS__g"
              x1="6.243"
              x2="15.607"
              y1="6.296"
              y2="17.996"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D66766" />
              <stop offset="1" stopColor="#E26A55" />
            </linearGradient>
            <linearGradient
              id="INS__h"
              x1="6.002"
              x2="15.898"
              y1="17.999"
              y2="6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AD4AA9" />
              <stop offset="1" stopColor="#AD3EBB" />
            </linearGradient>
            <linearGradient
              id="INS__i"
              x1="6.005"
              x2="18.008"
              y1="6"
              y2="17.994"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E15A68" />
              <stop offset="1" stopColor="#EB5A55" />
            </linearGradient>
            <linearGradient
              id="INS__j"
              x1="18.002"
              x2="5.994"
              y1="6"
              y2="15.956"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AC757A" />
              <stop offset="1" stopColor="#AC8270" />
            </linearGradient>
            <linearGradient
              id="INS__k"
              x1="6.002"
              x2="17.966"
              y1="6"
              y2="17.961"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6466AA" />
              <stop offset="1" stopColor="#8563A1" />
            </linearGradient>
            <linearGradient
              id="INS__l"
              x1="6.18"
              x2="18.006"
              y1="6.153"
              y2="16.312"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#857390" />
              <stop offset="1" stopColor="#986C8D" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconINS.displayName = 'INS'
