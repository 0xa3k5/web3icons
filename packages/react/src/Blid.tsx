import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconBlid = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.796 16.286c-.536.03-.562-.755-.467-1.102a222 222 0 0 1 1.543-5.228c.16-.532.447-1.017.835-1.415.485-.492 1.535-.62 1.826.163.107.287-.034.93-.146 1.32l-1.2 4.012c-.33 1.097-1.144 2.181-2.391 2.25M9.874 9.72l-1.53 5.057a.17.17 0 0 0 .13.219.2.2 0 0 0 .098-.005l.124-.042a.55.55 0 0 0 .398-.395l1.47-4.911a.18.18 0 0 0-.03-.163.2.2 0 0 0-.15-.077h-.064q-.348-.005-.446.317m6.309-1.371a.22.22 0 0 1 .201-.172c.669-.056 2.31-.206 2.006 1.072a71 71 0 0 1-.887 3.377q-.334 1.144-1.286 1.466-.795.267-1.607.48a.05.05 0 0 1-.038-.065zm.386 4.461.874-3.411a.22.22 0 0 0-.03-.176.21.21 0 0 0-.15-.094l-.073-.009q-.277-.03-.343.24l-.99 3.797q-.072.256.172.159l.171-.073a.6.6 0 0 0 .364-.429zm3.163-2.678.574-.07a.07.07 0 0 1 .064.022q.015.018.017.035v.038l-.12.544q0 .025-.021.043a.07.07 0 0 1-.043.018l-.711.11a.07.07 0 0 0-.043.022.1.1 0 0 0-.017.039l-.283 1.191a.08.08 0 0 0 .055.094.1.1 0 0 0 .039 0l.763-.197a.07.07 0 0 1 .069.022q.014.014.02.034a.1.1 0 0 1 0 .039l-.128.57c0 .017-.008.025-.017.038a.1.1 0 0 1-.034.022l-1.822.535a.07.07 0 0 1-.072-.017.08.08 0 0 1-.017-.077l1.22-4.984a.1.1 0 0 1 .027-.043.07.07 0 0 1 .043-.017h1.628a.07.07 0 0 1 .06.03.08.08 0 0 1 .017.064l-.137.617c0 .017-.013.035-.026.043a.07.07 0 0 1-.043.017l-.835.03a.07.07 0 0 0-.043.017.1.1 0 0 0-.026.043l-.24 1.029a.08.08 0 0 0 .017.073l.03.021h.035zm-12.476 2.39q.262.174.223.43c-.21 1.332-.575 2.455-1.089 3.36-.463.805-1.598 1.028-2.417 1.255a.09.09 0 0 1-.086-.026.1.1 0 0 1-.025-.09l2.742-9.18q.018-.061.082-.072.907-.122 1.526.021c.822.197 0 2.374-.215 3.056a2.36 2.36 0 0 1-.745 1.148c-.043.039-.043.069.004.099m-.797-.75a.16.16 0 0 0 .077.19.154.154 0 0 0 .197-.043l.309-.378a.2.2 0 0 0 .03-.055l.475-1.693a.16.16 0 0 0-.068-.18.2.2 0 0 0-.065-.022l-.184-.017a.16.16 0 0 0-.163.116zm-1.007 4.085.184-.085a.6.6 0 0 0 .313-.378l.531-1.834a.2.2 0 0 0-.03-.171.2.2 0 0 0-.15-.077h-.064a.3.3 0 0 0-.304.218l-.643 2.186q-.08.264.163.141m6.454-1.864.754-.206h.017c.009 0 .013.009.018.013q.008.007.012.017v.026l-.244 1.007a.04.04 0 0 1-.03.03l-1.671.549h-.018a.04.04 0 0 1-.017-.013.04.04 0 0 1-.013-.022v-.021l1.796-7.2a.04.04 0 0 1 .013-.022.04.04 0 0 1 .021-.008l.703.004.018.004q.008.006.012.013l.009.017v.022l-1.427 5.739v.02l.008.022.017.009zm.951.69 1.715-6.48a.08.08 0 0 1 .073-.06h.71c.052 0 .087.064.07.111l-1.642 6.232a.1.1 0 0 1-.017.034.1.1 0 0 1-.034.021l-.776.25a.07.07 0 0 1-.043 0 .1.1 0 0 1-.034-.022.1.1 0 0 1-.017-.039.1.1 0 0 1 0-.043z"
          />
        </>
      ) : (
        <>
          <path
            fill="#132227"
            d="M7.795 16.286c-.535.03-.561-.755-.467-1.102a222 222 0 0 1 1.543-5.228c.16-.532.447-1.017.836-1.415.484-.492 1.534-.62 1.826.163.107.287-.035.93-.146 1.32l-1.2 4.012c-.33 1.097-1.144 2.181-2.392 2.25M9.874 9.72l-1.53 5.057a.17.17 0 0 0 .13.219.2.2 0 0 0 .097-.005l.124-.042a.55.55 0 0 0 .399-.395l1.47-4.911a.18.18 0 0 0-.03-.163.2.2 0 0 0-.15-.077h-.064q-.349-.005-.446.317m6.309-1.371a.22.22 0 0 1 .201-.172c.669-.056 2.31-.206 2.006 1.072a71 71 0 0 1-.887 3.377q-.335 1.144-1.286 1.466-.795.267-1.607.48a.05.05 0 0 1-.039-.065zm.385 4.461.875-3.411a.22.22 0 0 0-.095-.24.2.2 0 0 0-.085-.03l-.073-.009q-.278-.03-.343.24l-.99 3.797q-.072.256.171.159l.172-.073a.6.6 0 0 0 .364-.429zm3.163-2.678.574-.07a.07.07 0 0 1 .065.022c.008.013.017.022.017.035v.038l-.12.544q-.001.025-.022.043a.07.07 0 0 1-.042.018l-.712.11a.07.07 0 0 0-.043.022.1.1 0 0 0-.017.039l-.283 1.191a.08.08 0 0 0 .022.073.07.07 0 0 0 .073.022l.762-.197a.07.07 0 0 1 .069.02q.015.015.02.034a.1.1 0 0 1 .001.04l-.128.57c0 .017-.009.025-.017.038a.1.1 0 0 1-.035.022l-1.821.535a.07.07 0 0 1-.073-.017.08.08 0 0 1-.017-.077l1.221-4.984a.1.1 0 0 1 .026-.043.07.07 0 0 1 .043-.017h1.629a.07.07 0 0 1 .06.03.08.08 0 0 1 .017.064l-.137.617c0 .017-.013.035-.026.043a.07.07 0 0 1-.043.017l-.836.03a.07.07 0 0 0-.043.017.1.1 0 0 0-.025.043l-.24 1.029a.08.08 0 0 0 .017.073l.03.021h.034zm-12.476 2.39q.263.174.223.43c-.21 1.332-.574 2.455-1.088 3.36-.463.805-1.599 1.028-2.417 1.255a.09.09 0 0 1-.086-.026.1.1 0 0 1-.026-.09l2.743-9.18q.019-.061.081-.072.908-.122 1.526.021c.823.197 0 2.374-.214 3.056a2.36 2.36 0 0 1-.746 1.148c-.043.039-.043.069.004.099m-.797-.75a.16.16 0 0 0 .077.19.154.154 0 0 0 .198-.043l.308-.378a.2.2 0 0 0 .03-.055l.476-1.693a.16.16 0 0 0-.069-.18.2.2 0 0 0-.064-.022l-.184-.017a.16.16 0 0 0-.163.116zm-1.007 4.085.184-.085a.6.6 0 0 0 .313-.378l.532-1.834a.2.2 0 0 0-.03-.171.2.2 0 0 0-.15-.077h-.065a.3.3 0 0 0-.304.218l-.643 2.186c-.051.176 0 .223.163.141m6.454-1.864.755-.206h.017c.008 0 .013.009.017.013q.009.007.013.017v.026l-.244 1.007a.04.04 0 0 1-.03.03l-1.672.549h-.017a.04.04 0 0 1-.017-.013.04.04 0 0 1-.013-.022v-.021l1.796-7.2a.04.04 0 0 1 .013-.022.03.03 0 0 1 .021-.008l.703.004.017.004q.008.006.013.013l.008.017v.022l-1.427 5.739v.02l.009.022.017.009zm.952.69 1.714-6.48a.08.08 0 0 1 .073-.06h.711c.052 0 .086.064.069.111l-1.641 6.232a.1.1 0 0 1-.018.034.1.1 0 0 1-.034.021l-.776.25a.1.1 0 0 1-.042 0 .1.1 0 0 1-.035-.022.1.1 0 0 1-.017-.039.1.1 0 0 1 0-.043z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBlid.displayName = 'Blid'

export default IconBlid
