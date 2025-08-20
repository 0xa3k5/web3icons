import React, { SVGProps } from 'react'

export interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: string | number
}

const Logo: React.FC<LogoProps> = ({ size = 64, ...props }) => {
  const svgSize = typeof size === 'number' ? `${size}px` : size
  return (
    <svg
      width={svgSize}
      height={svgSize}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        width="128"
        height="128"
        transform="translate(128) rotate(90)"
        fill="#080808"
      />
      <path
        d="M66.3893 39.8221L101.345 60.9759C103.917 62.5324 103.917 66.2637 101.345 67.8202L66.3893 88.9741C64.4807 90.1291 61.9962 89.4997 60.8678 87.5752L48.4641 66.4213C47.7315 65.172 47.7315 63.6242 48.4641 62.3748L60.8678 41.221C61.9962 39.2965 64.4807 38.6671 66.3893 39.8221Z"
        fill="#FF3D00"
      />
      <path
        d="M23.24 62.3795L50.8395 42.414C52.5873 41.1496 54.8224 43.1664 53.7437 45.0345L43.3698 62.9999C43.0125 63.6187 43.0125 64.3812 43.3698 65.0001L53.7437 82.9654C54.8224 84.8335 52.5873 86.8504 50.8395 85.586L23.24 65.6204C22.1364 64.822 22.1364 63.1779 23.24 62.3795Z"
        fill="#FF3D00"
      />
    </svg>
  )
}

export default Logo
