import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconRBW = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#RBW__a)"
        d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
      />
      <path
        fill="#F6F7F3"
        d="M8.258 15.772c.639.8 2.066 2.43 5.88 1.542-.673-.578-2.023-2.1-2.07-3.544-.664-.094-1.937-.57-1.697-1.727.051.411.454 1.286 1.629 1.479.175.012.612.012.955-.082.232-.064.369-.03.54.009.142.034.305.072.575.072.595 0 1.354-.758 1.628-1.05l-.951-.908a1.66 1.66 0 0 0 .527-1.376l2.297-1.971-2.829 1.003a3.1 3.1 0 0 0-1.787-.583c-1.071 0-4.268.994-4.697 4.521zm5.52-5.74c-.206.382-.561 1.188-.313 1.368.253.18.729-.296.943-.557-.214-.137-.63-.502-.63-.81"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="url(#RBW__b)"
        d="M10.221 9.137c-2.443 1.629-2.661 5.027-2.464 6.523-.497-.699-1.329-2.078-1.329-3.549 0-1.178.472-2.27.703-2.67l.549-.3h1.757L8.25 8.418h-.43c.917-1.2 2.657-1.825 3.416-1.988l1.084 1.375V6.677l-.094-.248c2.297.085 3.484 1.285 3.793 1.868l-1.62.356c-1.53-.866-3.425-.039-4.179.484"
      />
      <path
        fill="url(#RBW__c)"
        d="M18.428 12a6.429 6.429 0 1 1-1.316-3.9l-.437.137a6 6 0 1 0 .429.6l.343-.244A6.4 6.4 0 0 1 18.428 12"
      />
      <defs>
        <linearGradient
          id="RBW__a"
          x1="20.425"
          x2="12"
          y1="8.366"
          y2="19.286"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0D183A" />
          <stop offset=".22" stopColor="#112A73" />
          <stop offset=".29" stopColor="#13224E" />
          <stop offset=".46" stopColor="#18417B" />
          <stop offset=".73" stopColor="#0F2771" />
          <stop offset="1" stopColor="#0D1839" />
        </linearGradient>
        <linearGradient
          id="RBW__b"
          x1="17.859"
          x2="8.431"
          y1="7.826"
          y2="20.398"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8EF6EE" />
          <stop offset=".3" stopColor="#5C71D9" />
          <stop offset=".67" stopColor="#D73960" />
          <stop offset="1" stopColor="#F8CF44" />
        </linearGradient>
        <linearGradient
          id="RBW__c"
          x1="5.374"
          x2="19.101"
          y1="11.271"
          y2="15.227"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1774C8" />
          <stop offset="1" stopColor="#17458A" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconRBW.displayName = 'RBW'
