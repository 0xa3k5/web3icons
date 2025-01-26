import { TMetadata, TType } from '@web3icons/common'
import { confirm } from '@clack/prompts'
import chalk from 'chalk'
import { updateMetadataJson } from '.'

export const confirmAndAddMetadata = async (metadata: TMetadata, type: TType) => {
  const answer = await confirm({
    message: `Confirm ${type}: \n\n${Object.entries(metadata)
      .map(([key, value]) => `${chalk.bold(key)}: ${String(value)}`)
      .join('\n')}\n`,
    active: chalk.green('Yes'),
    inactive: chalk.red('No'),
  })

  if (!answer) {
    console.log('↛ skipping... did not confirm metadata:', metadata.id)
    process.exit(0)
  }

  await updateMetadataJson(metadata, type)
}
