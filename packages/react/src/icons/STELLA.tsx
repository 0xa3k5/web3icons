import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSTELLA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#301748"
        d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
      />
      <path
        fill="url(#STELLA__a)"
        d="M12.278 16.852a7 7 0 0 1-.69-.73c-.51-.655-1.641-1.8-1.924-2.09l-.973-.995c-.043-.047-.12-.107-.077-.184.047-.086.137-.073.214-.069l.103.026.686.274c.463.189.913.382 1.371.558.279.102.399 0 .343-.296a7 7 0 0 0-.171-.72.38.38 0 0 1 .321-.476c.094-.017.193-.017.287-.026s.193-.03.232-.141a.24.24 0 0 0-.082-.274c-.313-.3-.621-.609-.93-.913Q9.135 8.969 7.285 7.14c-.043-.043-.094-.086-.06-.154.039-.069.099-.06.159-.047.193.038.33.171.48.278.398.275.818.523 1.226.785l.857.535c.278.184.548.364.827.54.398.257.806.502 1.2.755.433.274.861.557 1.286.83.081.052.15.078.231.01.086-.073.073-.146.034-.245-.085-.227-.244-.415-.304-.651-.021-.073-.043-.15.039-.214a.18.18 0 0 1 .214-.01q.437.206.848.464a10 10 0 0 0 1.042.557c.583.274 1.14.6 1.693.93.304.194.567.448.771.746.159.218.296.458.399.707a3.42 3.42 0 0 1-.197 3.214 3.94 3.94 0 0 1-1.985 1.594 3.2 3.2 0 0 1-1.157.172c-.776-.052-1.543-.159-2.614-1.084zm5.019-2.336A2.276 2.276 0 0 0 15 12.193a2.286 2.286 0 0 0-2.25 2.34c0 1.088 1.058 2.301 2.262 2.224 1.243.052 2.276-1.071 2.285-2.241"
      />
      <path
        fill="url(#STELLA__b)"
        d="M9.544 11.559a.356.356 0 0 0 .343.36.34.34 0 0 0 .343-.369.37.37 0 0 0-.365-.351.35.35 0 0 0-.321.36"
      />
      <path
        fill="url(#STELLA__c)"
        d="M10.992 7.174c.206 0 .33-.128.33-.343a.35.35 0 0 0-.342-.334c-.15 0-.36.197-.36.343a.356.356 0 0 0 .372.334"
      />
      <path
        fill="url(#STELLA__d)"
        d="M7.242 10.243a.3.3 0 0 0-.317-.313.35.35 0 0 0-.317.33.33.33 0 0 0 .317.309.31.31 0 0 0 .317-.322z"
      />
      <path
        fill="url(#STELLA__e)"
        d="M15.012 16.757c1.243.052 2.276-1.071 2.285-2.241A2.276 2.276 0 0 0 15 12.193a2.286 2.286 0 0 0-2.25 2.34c0 1.088 1.058 2.297 2.262 2.22z"
      />
      <defs>
        <linearGradient
          id="STELLA__a"
          x1="19.295"
          x2="4.717"
          y1="11.999"
          y2="11.999"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2107B" />
          <stop offset="1" stopColor="#301748" />
        </linearGradient>
        <linearGradient
          id="STELLA__b"
          x1="19.174"
          x2="4.626"
          y1="12"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2107B" />
          <stop offset="1" stopColor="#0D1126" />
        </linearGradient>
        <linearGradient
          id="STELLA__c"
          x1="19.285"
          x2="4.714"
          y1="11.995"
          y2="11.995"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2107B" />
          <stop offset="1" stopColor="#0D1126" />
        </linearGradient>
        <linearGradient
          id="STELLA__d"
          x1="19.377"
          x2="4.714"
          y1="11.956"
          y2="11.956"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2107B" />
          <stop offset="1" stopColor="#0D1126" />
        </linearGradient>
        <linearGradient
          id="STELLA__e"
          x1="18.523"
          x2="12.865"
          y1="15.832"
          y2="13.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#301748" />
          <stop offset="1" stopColor="#E2107B" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconSTELLA.displayName = 'STELLA'
