import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconBch = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.977 7.813c-.587-1.504-2.074-1.641-3.81-1.299l-.613-2.164-1.315.382.604 2.087-1.046.317-.604-2.113-1.303.381.613 2.143-.836.257V7.8l-1.804.514.398 1.398s.965-.3.956-.275c.527-.154.789.107.917.36l.703 2.447.142-.021-.142.038.986 3.438c.026.171 0 .463-.364.57.017.008-.956.278-.956.278l.188 1.637 1.702-.488.943-.262.625 2.173 1.299-.377-.609-2.147 1.046-.291.613 2.142 1.316-.377L15 16.384c2.164-.758 3.549-1.757 3.15-3.878-.326-1.706-1.324-2.229-2.657-2.165.643-.612.921-1.422.493-2.528zm-.489 5.186c.46 1.628-2.374 2.237-3.257 2.498l-.827-2.884c.887-.257 3.596-1.307 4.085.386m-1.774-3.905c.42 1.488-1.954 1.976-2.696 2.19l-.75-2.614c.742-.21 3-1.114 3.446.433z"
          />
        </>
      ) : (
        <>
          <path
            fill="#58BE92"
            d="M15.978 7.813c-.588-1.504-2.075-1.641-3.81-1.299l-.613-2.164-1.316.382.604 2.087-1.045.317-.605-2.113-1.303.381.613 2.143-.835.257V7.8l-1.805.514.399 1.398s.964-.3.956-.275c.527-.154.788.107.917.36l.703 2.447.141-.021-.141.038.985 3.438c.026.171 0 .463-.364.57.017.008-.956.278-.956.278l.189 1.637 1.701-.488.943-.262.626 2.173 1.298-.377-.608-2.147 1.046-.291.612 2.142 1.316-.377L15 16.384c2.165-.758 3.549-1.757 3.15-3.878-.325-1.706-1.324-2.229-2.657-2.165.643-.612.922-1.422.493-2.528zm-.489 5.186c.459 1.628-2.374 2.237-3.257 2.498l-.827-2.884c.887-.257 3.595-1.307 4.084.386m-1.774-3.905c.42 1.488-1.955 1.976-2.696 2.19l-.75-2.614c.741-.21 3-1.114 3.446.433z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBch.displayName = 'Bch'

export default IconBch
