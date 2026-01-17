import cx from 'classnames'

interface Props {
  className?: string
}

const usedByProjects = [
  { name: 'OpenZeppelin', url: 'https://openzeppelin.com' },
  { name: 'ChainSafe', url: 'https://chainsafe.io' },
  { name: 'The Graph', url: 'https://thegraph.com' },
  { name: 'TrustSwap', url: 'https://trustswap.com' },
  { name: 'idOS Network', url: 'https://idos.network' },
  { name: 'BuidlGuidl', url: 'https://abi.ninja' },
  { name: 'LightHouse', url: 'https://lighthouse.cx/' },
]

export const UsedBy = ({ className }: Props) => {
  return (
    <div className={cx('flex flex-col font-mono', className)}>
      <span className="text-xs uppercase tracking-widest text-white/30">
        Used By
      </span>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {usedByProjects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/40 transition-colors hover:text-white/60"
          >
            {project.name}
          </a>
        ))}
      </div>
    </div>
  )
}
