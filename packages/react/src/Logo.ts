import type { TIconVariants } from '@web3icons/common'
import { createWeb3Icon } from './createWeb3Icon.js'

const __iconNode: TIconVariants = {
  branded: [
    [
      'path',
      {
        d: 'm13.157 6.188 7.258 4.701c.78.506.78 1.716 0 2.222l-7.258 4.701c-.579.375-1.332.17-1.674-.454l-2.575-4.701a1.378 1.378 0 0 1 0-1.314l2.575-4.701c.342-.625 1.095-.83 1.674-.454Z',
        fill: '#FF3D00',
      },
    ],
    [
      'path',
      {
        d: 'm3.251 11.377 5.532-4.283c.53-.41 1.207.244.88.85l-1.96 3.635a.689.689 0 0 0 0 .649l1.96 3.634c.327.606-.35 1.26-.88.85L3.25 12.43a.677.677 0 0 1 0-1.052Z',
        fill: '#FF3D00',
      },
    ],
  ],
}

const Web3IconLogo = createWeb3Icon('Web3IconLogo', __iconNode)

Web3IconLogo.displayName = 'Web3IconLogo'

export { __iconNode }
export default Web3IconLogo
