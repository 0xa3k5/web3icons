import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconMAHA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m19.35 10.871-3.396-4.743a1.3 1.3 0 0 0-1.073-.557c-.43 0-.82.202-1.073.557l-.37.516-.37-.516a1.3 1.3 0 0 0-1.072-.557c-.43 0-.82.202-1.073.557l-.365.509-.366-.51a1.3 1.3 0 0 0-1.073-.556c-.427 0-.82.202-1.073.557L4.648 10.87a1.94 1.94 0 0 0 0 2.258l3.398 4.743a1.31 1.31 0 0 0 1.074.556c.43 0 .82-.201 1.073-.556L12 15.347l.372.522q.003.002.004.005l1.431 1.998a1.31 1.31 0 0 0 1.072.556c.43 0 .82-.201 1.073-.556l3.397-4.743a1.93 1.93 0 0 0 .002-2.258m-7.885-4.34a.65.65 0 0 1 .53-.274c.213 0 .407.1.532.274l.496.693L12 8.651l-1.026-1.434zM9.65 17.467a.65.65 0 0 1-.83.202.65.65 0 0 1-.232-.202l-3.396-4.744a1.245 1.245 0 0 1 0-1.448L8.588 6.53a.65.65 0 0 1 .531-.274c.212 0 .407.1.531.274l.492.687-2.616 3.653a1.94 1.94 0 0 0 .002 2.258l.2.274 1.753 2.464c.223.313.554.506.923.547zm1.435-2.002a.65.65 0 0 1-1.062 0l-1.804-2.534h-.002l-.15-.21a1.245 1.245 0 0 1 0-1.448l2.49-3.477 1.025 1.435-1.173 1.638a1.94 1.94 0 0 0 0 2.258l1.173 1.638zM12 9.812l1.048 1.462a1.245 1.245 0 0 1 0 1.449l-1.049 1.463-1.047-1.462a1.245 1.245 0 0 1 0-1.45l1.047-1.46zm1.59 3.315a1.94 1.94 0 0 0 0-2.259L12.417 9.23l1.023-1.427 2.484 3.47a1.245 1.245 0 0 1-.002 1.452l-.397.564-1.547 2.174a.65.65 0 0 1-.531.274.65.65 0 0 1-.527-.269l-.505-.703zm5.22-.404-3.397 4.743a.65.65 0 0 1-.83.202.65.65 0 0 1-.232-.202l-.755-1.052a1.3 1.3 0 0 0 .924-.55l1.33-1.867.001.002.217-.308.255-.36h-.001l.144-.207a1.94 1.94 0 0 0 0-2.257l-2.61-3.643.495-.693a.65.65 0 0 1 .53-.274c.213 0 .407.1.532.274l3.396 4.743a1.24 1.24 0 0 1 0 1.449"
          />
          <path
            fill="currentColor"
            d="M10.552 16.423q-.076 0-.153-.009L9.67 17.44l.55.397 1.334-1.868a1.32 1.32 0 0 1-1.002.455m2.891-.001q.076 0 .153-.01l.729 1.026-.55.397-1.326-1.865a1.3 1.3 0 0 0 .994.452"
          />
          <path
            fill="currentColor"
            d="m11.579 14.762.424.59-.645.884-.424-.574zM10.14 7.217l.42.585-1.512 2.116-.527-.425zm1.446 2.014.411.585-.962 1.359-.527-.428zm1.437-2.007.415.581-1.021 1.425L12 8.65z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MAHA__a)"
            d="m19.351 10.871-3.397-4.743a1.3 1.3 0 0 0-1.072-.557c-.43 0-.82.202-1.073.557l-.37.516-.37-.516a1.3 1.3 0 0 0-1.073-.557c-.43 0-.82.202-1.073.557l-.365.509-.365-.51a1.3 1.3 0 0 0-1.073-.556c-.428 0-.82.202-1.073.557L4.648 10.87a1.94 1.94 0 0 0 0 2.258l3.399 4.743a1.31 1.31 0 0 0 1.073.556c.43 0 .82-.201 1.073-.556L12 15.347l.373.522q.003.002.003.005l1.432 1.998a1.31 1.31 0 0 0 1.072.556 1.3 1.3 0 0 0 1.072-.556l3.397-4.743a1.93 1.93 0 0 0 .002-2.258m-7.885-4.34a.65.65 0 0 1 .53-.274c.212 0 .407.1.531.274l.496.693L12 8.65l-1.027-1.434zM9.65 17.467a.65.65 0 0 1-.83.202.65.65 0 0 1-.232-.202l-3.397-4.744a1.245 1.245 0 0 1 0-1.448L8.59 6.53a.65.65 0 0 1 .531-.274c.212 0 .406.1.531.274l.492.687-2.616 3.653a1.94 1.94 0 0 0 .001 2.258l.2.274 1.754 2.464c.223.313.554.506.923.547zm1.434-2.002a.65.65 0 0 1-1.062 0L8.22 12.931h-.002l-.151-.21a1.245 1.245 0 0 1 0-1.448l2.49-3.477 1.026 1.435-1.173 1.638a1.94 1.94 0 0 0 0 2.258l1.173 1.638zM12 9.812l1.048 1.462a1.245 1.245 0 0 1 0 1.449L12 14.186l-1.048-1.462a1.245 1.245 0 0 1 0-1.45L12 9.815zm1.59 3.315a1.94 1.94 0 0 0 0-2.259L12.417 9.23l1.023-1.427 2.485 3.47a1.24 1.24 0 0 1-.002 1.452l-.398.564-1.547 2.174a.65.65 0 0 1-.53.274.65.65 0 0 1-.528-.269l-.504-.703zm5.22-.404-3.397 4.743a.65.65 0 0 1-.83.202.65.65 0 0 1-.232-.202l-.754-1.052a1.3 1.3 0 0 0 .923-.55l1.33-1.867.002.002.217-.308.255-.36h-.002l.145-.207a1.94 1.94 0 0 0 0-2.257l-2.611-3.643.495-.693a.65.65 0 0 1 .531-.274c.212 0 .406.1.532.274l3.396 4.743a1.245 1.245 0 0 1 0 1.449"
          />
          <path
            fill="url(#MAHA__b)"
            d="M10.553 16.423q-.077 0-.153-.009l-.73 1.025.551.397 1.333-1.868a1.32 1.32 0 0 1-1.001.455"
          />
          <path
            fill="url(#MAHA__c)"
            d="M13.443 16.423q.077 0 .154-.01l.728 1.026-.55.397-1.326-1.865a1.3 1.3 0 0 0 .994.452"
          />
          <path
            fill="url(#MAHA__d)"
            d="m11.58 14.762.423.59-.645.884-.424-.574z"
          />
          <path
            fill="url(#MAHA__e)"
            d="m10.14 7.217.42.585-1.512 2.116-.527-.425z"
          />
          <path
            fill="url(#MAHA__f)"
            d="m11.586 9.231.412.585-.962 1.359-.528-.428z"
          />
          <path
            fill="url(#MAHA__g)"
            d="m13.023 7.224.415.581-1.02 1.425-.416-.58z"
          />
          <defs>
            <linearGradient
              id="MAHA__a"
              x1="7.134"
              x2="17.061"
              y1="16.964"
              y2="7.232"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8506" />
              <stop offset=".581" stopColor="#FD3947" />
              <stop offset="1" stopColor="#FB0078" />
            </linearGradient>
            <linearGradient
              id="MAHA__b"
              x1="16.26"
              x2="8.749"
              y1="5.477"
              y2="17.872"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#78005B" />
              <stop offset=".348" stopColor="#7A025A" stopOpacity=".652" />
              <stop offset=".51" stopColor="#820955" stopOpacity=".49" />
              <stop offset=".633" stopColor="#8E154E" stopOpacity=".367" />
              <stop offset=".737" stopColor="#A12643" stopOpacity=".263" />
              <stop offset=".828" stopColor="#B83C36" stopOpacity=".172" />
              <stop offset=".911" stopColor="#D65725" stopOpacity=".089" />
              <stop offset=".986" stopColor="#F87711" stopOpacity=".014" />
              <stop offset="1" stopColor="#FF7E0D" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="MAHA__c"
              x1="16.303"
              x2="9.251"
              y1="15.935"
              y2="4.073"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7E0D" stopOpacity="0" />
              <stop offset=".009" stopColor="#F97811" stopOpacity=".013" />
              <stop offset=".065" stopColor="#D65825" stopOpacity=".089" />
              <stop offset=".127" stopColor="#B93D36" stopOpacity=".173" />
              <stop offset=".195" stopColor="#A12643" stopOpacity=".266" />
              <stop offset=".272" stopColor="#8F154E" stopOpacity=".371" />
              <stop offset=".363" stopColor="#820955" stopOpacity=".495" />
              <stop offset=".482" stopColor="#7A025A" stopOpacity=".657" />
              <stop offset=".734" stopColor="#78005B" />
            </linearGradient>
            <linearGradient
              id="MAHA__d"
              x1="7.687"
              x2="13.636"
              y1="15.902"
              y2="2.026"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7E0D" stopOpacity="0" />
              <stop offset=".013" stopColor="#F97910" stopOpacity=".019" />
              <stop offset=".114" stopColor="#D25427" stopOpacity=".166" />
              <stop offset=".219" stopColor="#B1363A" stopOpacity=".318" />
              <stop offset=".326" stopColor="#981E48" stopOpacity=".473" />
              <stop offset=".438" stopColor="#860D53" stopOpacity=".634" />
              <stop offset=".555" stopColor="#7B0359" stopOpacity=".805" />
              <stop offset=".69" stopColor="#78005B" />
            </linearGradient>
            <linearGradient
              id="MAHA__e"
              x1="4.919"
              x2="13.416"
              y1="16.809"
              y2="3.562"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF4630" stopOpacity="0" />
              <stop offset=".572" stopColor="#B31F48" stopOpacity=".572" />
              <stop offset="1" stopColor="#78005B" />
            </linearGradient>
            <linearGradient
              id="MAHA__f"
              x1="5.666"
              x2="13.585"
              y1="16.509"
              y2="4.358"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF4630" stopOpacity="0" />
              <stop offset=".572" stopColor="#B31F48" stopOpacity=".572" />
              <stop offset="1" stopColor="#78005B" />
            </linearGradient>
            <linearGradient
              id="MAHA__g"
              x1="12.076"
              x2="13.389"
              y1="8.883"
              y2="7.597"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF4630" stopOpacity="0" />
              <stop offset=".572" stopColor="#B31F48" stopOpacity=".572" />
              <stop offset="1" stopColor="#78005B" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMAHA.displayName = 'MAHA'
