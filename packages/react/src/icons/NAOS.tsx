import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNAOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#NAOS__a)"
        d="M12 4.714c3.998 0 7.285 3.249 7.285 7.286 0 3.999-3.248 7.286-7.285 7.286-4 0-7.286-3.249-7.286-7.286A7.27 7.27 0 0 1 12 4.714"
      />
      <path
        fill="#F0F3FA"
        d="M13.5 10.389a.42.42 0 0 1 .214.355.35.35 0 0 1-.056.189.41.41 0 0 1-.373.21.4.4 0 0 1-.171-.056L8.57 8.314v7.23l1.98-.917a.37.37 0 0 1 .197-.056c.137 0 .266.078.343.215a.35.35 0 0 1 .056.214.41.41 0 0 1-.206.326l-2.606 1.311a.54.54 0 0 1-.231.077c-.236 0-.39-.154-.39-.385V7.684c0-.077 0-.115.043-.192.111-.193.343-.27.54-.155l5.207 3.047z"
      />
      <path
        fill="#F0F3FA"
        d="M10.478 13.136a.38.38 0 0 1-.193-.343q0-.09.039-.18c.056-.129.21-.189.364-.184.064 0 .129.012.184.034l4.556 2.751V8.332l-1.971 1.045a.39.39 0 0 1-.404-.01.4.4 0 0 1-.14-.14.34.34 0 0 1-.056-.21.4.4 0 0 1 .214-.313L15.66 7.36c.077-.035.154-.073.231-.073.236 0 .394.15.394.373v8.254c0 .077 0 .111-.043.189-.115.184-.351.222-.544.15z"
      />
      <defs>
        <linearGradient
          id="NAOS__a"
          x1="16.928"
          x2="5.571"
          y1="6.214"
          y2="16.929"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5A47F0" />
          <stop offset="1" stopColor="#2A1BA8" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconNAOS.displayName = 'NAOS'
