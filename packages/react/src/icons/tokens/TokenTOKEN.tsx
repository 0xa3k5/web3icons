import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenTOKEN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.279 16.279A6.052 6.052 0 1 1 7.72 7.72a6.052 6.052 0 0 1 8.559 8.559m-2.582-2.796c.78-.167 1.542-.257 2.288-.283.34-.007.676.06.986.197.086.034.086.077.013.124a7.2 7.2 0 0 1-2.456 1.012c-.429.086-.454.231-.056.437.39.201.742.441 1.046.724q.11.102-.043.12c-1.14.142-2.091-.218-3.06-.78-.081-.043-.128-.025-.146.065-.094.445-.342 1.465-.775 1.671a.05.05 0 0 1-.06-.009.043.043 0 0 1 0-.055 3.44 3.44 0 0 0 .613-1.607.1.1 0 0 0-.043-.095.1.1 0 0 0-.103-.008c-1.05.531-2.014.968-3.24.827a.09.09 0 0 1-.073-.06.09.09 0 0 1 .021-.086 3.9 3.9 0 0 1 .973-.656c.472-.222.455-.385-.06-.484a6.6 6.6 0 0 1-2.528-1.046.07.07 0 0 1-.035-.051.07.07 0 0 1 .018-.06.1.1 0 0 1 .038-.021c1.046-.313 2.254-.086 3.322.132.145.03.162 0 .047-.098a8.6 8.6 0 0 1-2.37-3.24q-.29-.709.364-.317a10.1 10.1 0 0 1 2.799 2.443q.148.193.085-.043a3.3 3.3 0 0 1-.12-1.342q.055-.337.103-.667c.142-.95.278-1.86.626-2.821a.3.3 0 0 1 .146-.172.103.103 0 0 1 .141.052 11.3 11.3 0 0 1 .656 2.125c.125.606.117 1.24.11 1.87-.003.276-.007.55.001.822q.006.172.116.043a10.2 10.2 0 0 1 3.034-2.486q.322-.168.189.171a10.1 10.1 0 0 1-1.757 2.876c-.224.271-.496.5-.802.673a.1.1 0 0 0-.043.064.04.04 0 0 0 0 .022q.014.024.035.017"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M16.99 16.991A7.059 7.059 0 1 1 7.009 7.01a7.059 7.059 0 0 1 9.983 9.982m-.387-.388a6.51 6.51 0 1 1-9.207-9.207 6.51 6.51 0 0 1 9.207 9.207"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#62850B"
            d="M16.279 16.279A6.052 6.052 0 1 1 7.721 7.72a6.052 6.052 0 0 1 8.558 8.559m-2.582-2.796c.78-.167 1.543-.257 2.289-.283.339-.007.675.06.985.197.086.034.086.077.013.124a7.2 7.2 0 0 1-2.456 1.012c-.428.086-.454.231-.055.437q.587.3 1.045.724.11.102-.042.12c-1.14.142-2.092-.218-3.06-.78-.082-.043-.129-.025-.146.065-.094.445-.343 1.465-.776 1.671a.05.05 0 0 1-.06-.009.043.043 0 0 1 0-.055 3.44 3.44 0 0 0 .613-1.607.1.1 0 0 0-.043-.095.1.1 0 0 0-.103-.008c-1.05.531-2.014.968-3.24.827a.09.09 0 0 1-.072-.06.09.09 0 0 1 .02-.086c.29-.267.618-.488.974-.656.471-.222.454-.385-.06-.484a6.6 6.6 0 0 1-2.529-1.046.07.07 0 0 1-.033-.083.1.1 0 0 1 .016-.028.1.1 0 0 1 .039-.021c1.045-.313 2.254-.086 3.321.132.146.03.163 0 .047-.098a8.6 8.6 0 0 1-2.37-3.24q-.29-.709.365-.317a10.1 10.1 0 0 1 2.798 2.443q.15.193.086-.043a3.3 3.3 0 0 1-.12-1.342q.054-.337.102-.667c.142-.95.278-1.86.626-2.821a.3.3 0 0 1 .146-.172.1.1 0 0 1 .118.017q.015.015.024.035c.287.685.505 1.388.655 2.125.126.606.118 1.24.11 1.87-.003.276-.006.55.002.822q.006.172.115.043a10.2 10.2 0 0 1 3.035-2.486q.322-.168.188.171a10.1 10.1 0 0 1-1.757 2.876 2.9 2.9 0 0 1-.801.673.1.1 0 0 0-.043.064.04.04 0 0 0 0 .022q.013.024.034.017"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#62850B"
            d="M16.991 16.991A7.058 7.058 0 1 1 7.01 7.01a7.058 7.058 0 0 1 9.982 9.981m-.388-.388a6.51 6.51 0 1 1-9.206-9.206 6.51 6.51 0 0 1 9.206 9.206"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenTOKEN.displayName = 'TOKEN'