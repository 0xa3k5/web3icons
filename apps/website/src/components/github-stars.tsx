'use client'
import { useEffect, useState } from 'react'

export const GitHubStars = () => {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/0xa3k5/web3icons')
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count) {
          setStars(data.stargazers_count)
        }
      })
      .catch(() => {})
  }, [])

  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href="https://github.com/0xa3k5/web3icons"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center rounded-lg px-3 py-1.5 text-sm text-white/60 transition-colors hover:text-white"
      >
        <span className="absolute inset-0 overflow-hidden rounded-lg p-px">
          <span
            className="absolute -inset-full opacity-25 transition-opacity duration-500 group-hover:opacity-60"
            style={{
              background:
                'conic-gradient(from 0deg, transparent, #fff 15deg, transparent 30deg, transparent 180deg, #fff 195deg, transparent 210deg)',
              animation: `spin 5s linear infinite`,
            }}
          />
        </span>

        <span className="bg-gray-darkest absolute inset-px rounded-[7px]" />

        <span className="relative flex items-center">
          <span className="font-mono">Github</span>
          <span className="ml-2 inline-flex items-center gap-1 text-white/40 group-hover:text-white/60">
            {stars !== null && <span className="font-mono">{stars}</span>}
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="size-3.5"
            >
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
            </svg>
          </span>
        </span>
      </a>
    </div>
  )
}
