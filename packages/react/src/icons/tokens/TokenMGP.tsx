import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMGP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#CEEBFF"
        d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
      />
      <path
        fill="#91C5FF"
        d="M12 18.429a6.429 6.429 0 1 0 0-12.857 6.429 6.429 0 0 0 0 12.857"
      />
      <path
        fill="url(#MGP__a)"
        d="M12 13.714a6.86 6.86 0 0 0 5.541-2.82c-.043.502-.15.986-.3 1.44l-.527.523.36-.09a6 6 0 0 1-.27.557l-.519.39.343-.085A5.47 5.47 0 0 1 12 16.286c-1.929 0-3.626-1.055-4.629-2.657l.343.085-.519-.385a6 6 0 0 1-.283-.6l.373.128-.523-.523a6.4 6.4 0 0 1-.304-1.44A6.85 6.85 0 0 0 12 13.714"
      />
      <path
        fill="url(#MGP__b)"
        d="M16.071 12.202a4.071 4.071 0 1 1-8.142 0 4.071 4.071 0 0 1 8.142 0"
      />
      <path
        fill="url(#MGP__c)"
        d="M15.745 13.929a4.494 4.494 0 0 1-7.388 0 4.072 4.072 0 0 0 7.388 0"
      />
      <path
        fill="#FDFFFF"
        d="M15.642 11.559a1.714 1.714 0 1 1-3.428 0 1.714 1.714 0 0 1 3.428 0"
      />
      <path fill="url(#MGP__d)" d="m11.571 13.072.429-.643.428.643-.428.642z" />
      <path
        fill="#1474B0"
        d="M14.142 11.786a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0"
      />
      <path
        fill="#0C192A"
        d="M13.928 11.786a.643.643 0 1 1-1.286 0 .643.643 0 0 1 1.286 0"
      />
      <path
        fill="#FEFFFF"
        d="M13.714 11.357a.214.214 0 1 1-.429 0 .214.214 0 0 1 .429 0"
      />
      <path
        fill="#FDFFFF"
        d="M8.357 11.572a1.714 1.714 0 1 0 3.428 0 1.714 1.714 0 0 0-3.428 0"
      />
      <path
        fill="#1474B0"
        d="M9.857 11.799a.857.857 0 1 0 1.713 0 .857.857 0 0 0-1.713 0"
      />
      <path
        fill="#0C192A"
        d="M10.071 11.799a.643.643 0 1 0 1.286 0 .643.643 0 0 0-1.286 0"
      />
      <path
        fill="#FEFFFF"
        d="M10.285 11.357a.214.214 0 1 0 .429 0 .214.214 0 0 0-.429 0"
      />
      <defs>
        <linearGradient
          id="MGP__a"
          x1="19.043"
          x2="5.238"
          y1="8.861"
          y2="8.861"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#68AFE7" />
          <stop offset=".07" stopColor="#106EBE" />
          <stop offset=".16" stopColor="#0A3256" />
          <stop offset=".81" stopColor="#083459" />
          <stop offset=".91" stopColor="#1879CA" />
          <stop offset="1" stopColor="#67AEE6" />
        </linearGradient>
        <linearGradient
          id="MGP__b"
          x1="11.616"
          x2="11.616"
          y1="4.737"
          y2="19.309"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#06111D" />
          <stop offset="1" stopColor="#154983" />
        </linearGradient>
        <linearGradient
          id="MGP__c"
          x1="4.815"
          x2="19.184"
          y1="6.064"
          y2="6.064"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#083A5E" />
          <stop offset=".09" stopColor="#699AC3" />
          <stop offset=".29" stopColor="#FFFDFF" />
          <stop offset=".85" stopColor="#FDFDFD" />
          <stop offset=".94" stopColor="#4197DE" />
          <stop offset="1" stopColor="#114873" />
        </linearGradient>
        <linearGradient
          id="MGP__d"
          x1="12"
          x2="12"
          y1="4.714"
          y2="19.286"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C7C4BD" />
          <stop offset="1" stopColor="#ADA9AA" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

TokenMGP.displayName = 'MGP'
