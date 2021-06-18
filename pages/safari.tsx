import Page from '@components/Page'
import { useTheme } from '@components/Providers/ThemeColor'
import cn from 'classnames'
import { ChangeEventHandler } from 'react'

export default function Home() {
  const { color, setColor } = useTheme()

  const handleColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.currentTarget.value)
  }

  return (
    <Page className="min-h-screen flex flex-col">
      <div className="m-4 flex flex-col flex-grow text-center uppercase font-serif">
        <input
          className={cn('w-12', 'h-12', 'rounded-full', 'border-2')}
          type="color"
          value={color}
          onChange={handleColor}
        />
      </div>
    </Page>
  )
}
