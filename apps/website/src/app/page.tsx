'use client'
import { ControlBar, IconCard, ActionBar } from '../components'
import SearchInput from '../components/SearchInput'
import { useAppContext } from '../hooks'

export default function Home() {
  const { icons, selectedIcons, searchTerm, setSearchTerm } = useAppContext()

  return (
    <main className="flex h-screen flex-col items-center gap-16 font-mono">
      <div className="container flex flex-col gap-16 py-16">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-4xl">token icons</h1>
        </div>
        <div className="relative flex gap-16">
          <ControlBar className="sticky left-0 top-16 z-10 mt-16" />
          <div className="flex flex-col gap-4">
            <SearchInput
              onInput={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              value={searchTerm}
            />
            <div className="grid w-full grid-cols-5">
              {icons.map(([iconName, IconComponent]) => (
                <IconCard
                  className="h-fit"
                  key={iconName}
                  iconName={iconName}
                  IconComponent={IconComponent}
                />
              ))}
            </div>
          </div>
        </div>
        {selectedIcons.length > 0 && (
          <div className="flex w-full justify-center">
            <ActionBar />
          </div>
        )}
      </div>
    </main>
  )
}
