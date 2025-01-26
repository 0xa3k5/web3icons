import { execSync } from 'child_process'
import path from 'path'
import chalk from 'chalk'
import { confirm } from '@clack/prompts'
import { deleteMetadata, findExistingMetadata, getTypeAndVariant } from '../../utils'

export const handleDeletedIcons = async () => {
  const deletedFiles = execSync("git ls-files --deleted -- '*.svg' | tr '\n' ','").toString().trim()
  if (!deletedFiles) return

  const deletedIconPaths = deletedFiles.split(',').filter(Boolean)

  for (const filePath of deletedIconPaths) {
    const fileName = path.basename(filePath, '.svg')
    const { type } = getTypeAndVariant(filePath)

    const existingMetadata = findExistingMetadata(fileName, type)
    if (!existingMetadata) continue

    const shouldDelete = await confirm({
      message: `${chalk.yellow('⚠️')} Icon ${chalk.bold(fileName)} has been deleted.\nDo you want to remove its metadata as well?`,
      active: 'Yes, remove metadata',
      inactive: 'No, keep metadata',
    })

    if (shouldDelete) {
      await deleteMetadata(fileName, type)
      console.log(chalk.red(`Removed metadata for deleted ${type} icon: ${fileName}`))
    } else {
      console.log(chalk.blue(`Keeping metadata for deleted ${type} icon: ${fileName}`))
    }
  }
}

handleDeletedIcons()
