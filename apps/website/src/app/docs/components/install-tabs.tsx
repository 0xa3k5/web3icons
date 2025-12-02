import { CodeBlock } from '../../../components'

interface Props {
  pkg: string
}

export const InstallTabs = async ({ pkg }: Props) => {
  return (
    <CodeBlock
      tabs={[
        { label: 'npm', content: `npm install ${pkg}`, language: 'bash' },
        { label: 'yarn', content: `yarn add ${pkg}`, language: 'bash' },
        { label: 'bun', content: `bun add ${pkg}`, language: 'bash' },
        { label: 'pnpm', content: `pnpm add ${pkg}`, language: 'bash' },
      ]}
      lineNumbers={false}
    />
  )
}
