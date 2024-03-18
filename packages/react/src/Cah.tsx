import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCah = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.286 12a7.286 7.286 0 0 1-9.058 7.069c2.183-3.036 2.115-5.032 2.09-5.791v-.001l-.005-.171c.416.407.501.93.489 1.144q.254.246.514.489c.038.034.068-.116.081-.193a.46.46 0 0 0 .095.321c.24.347.484.913.578 1.153l.15-.137v.201c.163.287.502.917.561 1.136q.049.217.18.394l-.12.112c.035.223.095.66.112.934q.277-.124.536-.266c.351-.36.647-.818.775-1.071l.116.107c.073-.086.219-.386.219-.9 0-.519-.223-1.016-.335-1.2h.116c.009-.712-.536-1.324-.806-1.547h.155c-.673-1.106-2.216-1.046-2.657-1.029l-.086.005c.304-.19 1.358-.326 1.847-.37l.236-.042h1.148l.206-.141.034.085h1.269l.094.056h.643c.201-.218.63-.698.797-.956v-.02q.026.311.026.63m-.033-.693c-.471-.538-1.15-.824-1.437-.901v-.172c-.973-.467-1.796-.441-2.083-.373v-.133c-.982 0-1.616.399-1.813.6-.008-.03-.034-.102-.086-.137-.325.099-.818.613-1.024.857a2.8 2.8 0 0 0 .073-.655c0-.305-.12-.48-.18-.532l.004-.006c.036-.049.103-.14.103-.174-.099-.583-.566-1.285-.789-1.568h-.14c-.048-.489-1.017-1.166-1.497-1.44v.171c-.235-.141-.891-.416-1.658-.416-.84.02-1.649.326-2.29.869a7.286 7.286 0 0 1 12.818 4.01M6.431 7.303A7.26 7.26 0 0 0 4.714 12a7.28 7.28 0 0 0 3.743 6.368 9.68 9.68 0 0 0 3.26-5.202c0-.107.086-.223.133-.27-.223-.022-.84.15-1.53.985l-.086.107a.66.66 0 0 1-.162-.437 1.4 1.4 0 0 0-.275.622c-.128.085-.625.454-.715.673a3 3 0 0 1-.198-.489 3.4 3.4 0 0 0-.051.544l-.836.558a1.2 1.2 0 0 1-.034-.45c-.086.128-.12.402-.124.522-.283.112-.896.399-1.102.66a1.52 1.52 0 0 1-.265-.934c0-.471.06-1.243 1.05-2.361a3.55 3.55 0 0 1 1.68-1.059c0-.077.034-.206.051-.257l-.369.257-.741-.094-.42.3-.45-.056-.386.343-.865.043-.15.094-.733-.06c.308-.767 1.371-2.297 3.171-2.297a4.21 4.21 0 0 1 3.604 1.989 5 5 0 0 0-.557-1.158l.116-.167h-.18a2.27 2.27 0 0 0-.866-1.003V9.45l-.107.094a4.6 4.6 0 0 0-1.35-.823v-.325l-.154.128a1.8 1.8 0 0 0-.952-.343c0-.159-.057-.444-.083-.577l-.002-.01-.107.159a2 2 0 0 0-1.241-.45"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CAH__a)"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
          />
          <path
            fill="url(#CAH__b)"
            d="M12 17.143a5.143 5.143 0 1 0 0-10.286 5.143 5.143 0 0 0 0 10.286"
          />
          <path
            fill="#F0F3FA"
            d="M19.26 11.391c-.167.258-.596.738-.797.956h-.643l-.094-.056h-1.269l-.034-.085-.206.141H15.07l-.236.043c-.489.043-1.543.18-1.847.368l.085-.004c.442-.017 1.985-.077 2.658 1.029h-.155c.27.223.815.835.806 1.547h-.116c.112.184.335.681.335 1.2 0 .514-.146.814-.219.9l-.116-.107a5 5 0 0 1-.775 1.071 7 7 0 0 1-.536.266 13 13 0 0 0-.111-.934l.12-.112a1 1 0 0 1-.18-.394c-.06-.219-.399-.849-.562-1.136v-.201l-.15.137c-.094-.24-.338-.806-.578-1.153a.46.46 0 0 1-.095-.321c-.013.077-.043.227-.081.193a40 40 0 0 1-.514-.49c.012-.213-.073-.736-.489-1.143l.004.171c.026.759.095 2.756-2.091 5.794a7.2 7.2 0 0 1-1.77-.703 9.68 9.68 0 0 0 3.261-5.202c0-.107.086-.223.133-.27-.223-.022-.84.15-1.53.985l-.086.107a.66.66 0 0 1-.162-.437 1.4 1.4 0 0 0-.275.622c-.128.085-.625.454-.715.673a3 3 0 0 1-.198-.489 3.4 3.4 0 0 0-.051.544l-.836.558a1.2 1.2 0 0 1-.034-.45c-.086.128-.12.402-.124.522-.283.112-.896.399-1.102.66a1.52 1.52 0 0 1-.265-.934c0-.471.06-1.243 1.05-2.361a3.55 3.55 0 0 1 1.68-1.059c0-.077.034-.206.051-.257l-.369.257-.741-.094-.42.3-.45-.056-.386.343-.865.043-.15.094-.733-.06c.308-.767 1.371-2.297 3.171-2.297a4.21 4.21 0 0 1 3.604 1.989 5 5 0 0 0-.557-1.158l.116-.167h-.18a2.27 2.27 0 0 0-.866-1.003V9.45l-.107.094a4.6 4.6 0 0 0-1.35-.823v-.325l-.154.128a1.8 1.8 0 0 0-.952-.343c0-.163-.06-.458-.085-.587l-.107.159a2 2 0 0 0-1.243-.45 3.68 3.68 0 0 1 2.297-.875c.767 0 1.423.275 1.658.416v-.171c.48.274 1.449.951 1.496 1.44h.141c.223.283.69.985.79 1.568 0 .035-.074.133-.108.18.06.052.18.227.18.532 0 .304-.047.566-.073.656.206-.245.699-.76 1.024-.858.052.035.078.107.086.137.197-.201.832-.6 1.813-.6v.133c.287-.068 1.11-.094 2.083.373v.172c.287.077.968.364 1.44.904z"
          />
          <defs>
            <linearGradient
              id="CAH__a"
              x1="12"
              x2="12"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C16EE0" />
              <stop offset="1" stopColor="#5026A4" />
            </linearGradient>
            <linearGradient
              id="CAH__b"
              x1="12"
              x2="12"
              y1="6.857"
              y2="17.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#914AC4" />
              <stop offset="1" stopColor="#442281" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCah.displayName = 'Cah'

export default IconCah