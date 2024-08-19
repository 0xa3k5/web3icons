import { input } from '@inquirer/prompts'

export const getUserInputSlug = async (fileName: string) => {
  return await input({
    message: `Please enter the gecko api id of the network/token for ${fileName}`,
  })
}
