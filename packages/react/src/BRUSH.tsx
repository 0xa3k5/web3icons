import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconBRUSH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#BRUSH__a)"
        d="M18.857 12a6.857 6.857 0 1 1-13.715 0 6.857 6.857 0 0 1 13.715 0"
        fillOpacity=".3"
      />
      <path
        fill="url(#BRUSH__b)"
        d="M12 18.377a6.38 6.38 0 1 0 .33-12.756A6.38 6.38 0 0 0 12 18.377m0 .48a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="url(#BRUSH__c)"
        d="m8.164 15.296 2.739-2.482c.248.129.694.429.711.849l-2.421 2.67c-.343-.009-1.029-.232-1.029-1.037m.904.321a.214.214 0 1 0 0-.424.214.214 0 0 0 0 .428z"
      />
      <path
        fill="#737071"
        d="m11.704 12.553 2.816 1.2.6-.635-.103-.128.283-.223.291.377-.981 1.029-2.816-1.192-.446.485-.265-.245z"
      />
      <path
        fill="#B38C68"
        d="M11.417 7.727c-.857.124-1.423 1.029-1.599 1.457l4.277 4.316a1.56 1.56 0 0 0 1.582-1.444z"
      />
      <path
        fill="url(#BRUSH__d)"
        d="M10.538 8.516c-.18.068-.351.685-.411.981l3.831 3.866c.716-.056.905-.412.913-.583.189-.043.63-.523.823-.759l-4.209-4.277c-.145.069-.428.245-.428.395 0 .188-.296.291-.519.377"
      />
      <path
        fill="url(#BRUSH__e)"
        d="m13.941 5.147-2.49 2.649 4.2 4.23 3.172-3.18V5.143H13.94z"
      />
      <defs>
        <linearGradient
          id="BRUSH__a"
          x1="7.581"
          x2="16.075"
          y1="6.797"
          y2="17.194"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#99817E" />
          <stop offset=".25" stopColor="#948680" />
          <stop offset=".51" stopColor="#7C988B" />
          <stop offset=".77" stopColor="#7B90A1" />
          <stop offset="1" stopColor="#868A9F" />
        </linearGradient>
        <linearGradient
          id="BRUSH__b"
          x1="7.684"
          x2="15.814"
          y1="6.48"
          y2="17.511"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF413F" />
          <stop offset=".16" stopColor="#FD9819" />
          <stop offset=".36" stopColor="#FCC008" />
          <stop offset=".51" stopColor="#45C391" />
          <stop offset=".7" stopColor="#D69B70" />
          <stop offset=".86" stopColor="#A767E5" />
          <stop offset="1" stopColor="#6A8AEF" />
        </linearGradient>
        <linearGradient
          id="BRUSH__c"
          x1="9.129"
          x2="13.92"
          y1="10.338"
          y2="15.36"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D02612" />
          <stop offset=".48" stopColor="#EB4F2E" />
          <stop offset="1" stopColor="#841F0C" />
        </linearGradient>
        <linearGradient
          id="BRUSH__d"
          x1="6.874"
          x2="16.918"
          y1="7.34"
          y2="17.286"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0EBEFF" />
          <stop offset=".28" stopColor="#46CB85" />
          <stop offset=".51" stopColor="#FA4B4C" />
          <stop offset=".69" stopColor="#F9CD07" />
          <stop offset="1" stopColor="#AE63E4" />
        </linearGradient>
        <linearGradient
          id="BRUSH__e"
          x1="12.848"
          x2="17.005"
          y1="6.27"
          y2="10.543"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#79DBFF" />
          <stop offset=".29" stopColor="#77DC9B" />
          <stop offset=".55" stopColor="#EB6F69" />
          <stop offset=".73" stopColor="#FEE074" />
          <stop offset="1" stopColor="#C58FEC" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconBRUSH.displayName = 'BRUSH'
