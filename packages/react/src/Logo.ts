import { TIconVariants } from '@web3icons/common'
import { createWeb3Icon } from './createWeb3Icon'

const __iconNode: TIconVariants = {
  branded: [
    [
      'path',
      {
        d: 'M12.63 7.11 7.012 4.257a.739.739 0 0 1 0 1.266L12.63 16.89a.753.753 0 0 1-1.04-.261l-2.488-4.258a.736.736 0 0 1 0-.744L11.59 7.37a.753.753 0 0 1 1.04-.26Z',
        fill: '#FF3D00',
      },
    ],
  ],
}

const Web3IconLogo = createWeb3Icon('Web3IconLogo', __iconNode)

Web3IconLogo.displayName = 'Web3IconLogo'

export { __iconNode }
export default Web3IconLogo
