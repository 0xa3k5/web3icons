import { execSync } from 'child_process'

const executeCommand = (command: string) => {
  try {
    return execSync(command).toString().trim()
  } catch (error: any) {
    console.error(`Error executing '${command}':`, error.message)
    return ''
  }
}

const getNewIcons = (path: string) => {
  return executeCommand(
    `git ls-files --others --exclude-standard -- '*.svg' | grep '${path}' | xargs basename -a | sed 's/.svg//' | sort -u | tr '\\n' ',' | sed 's/,$//'`,
  )
}

const formatIconsForMessage = (icons: string) => {
  return icons
    .split(',')
    .map((icon) => `\`${icon.trim()}\``)
    .join(', ')
}

const simulateGitAndChangeset = () => {
  const newTokenIcons = getNewIcons('packages/core/src/svgs/tokens/')
  const newNetworkIcons = getNewIcons('packages/core/src/svgs/networks/')

  console.log('New Token Icons:', newTokenIcons)
  console.log('New Network Icons:', newNetworkIcons)

  // Simulating changeset log
  let changesetLog = '---\n"@web3icons/core": minor\n"@web3icons/react": minor\n---\n'
  if (newTokenIcons) {
    changesetLog += `New Token icons: ${formatIconsForMessage(newTokenIcons)}\n`
  }
  if (newNetworkIcons) {
    changesetLog += `New Network icons: ${formatIconsForMessage(newNetworkIcons)}\n`
  }
  console.log('\nSimulated Changeset Log:\n', changesetLog)

  // Simulating commit message
  let commitMessage = 'core: add new icons - '
  if (newTokenIcons || newNetworkIcons) {
    if (newTokenIcons) {
      commitMessage += `tokens: ${formatIconsForMessage(newTokenIcons)}`
      if (newNetworkIcons) commitMessage += ', '
    }
    if (newNetworkIcons) {
      commitMessage += `networks: ${formatIconsForMessage(newNetworkIcons)}`
    }
  }
  console.log('\nSimulated Commit Message:\n', commitMessage)
}

simulateGitAndChangeset()
