import Page from '@components/Page'
import { useTheme } from '@components/Providers/ThemeColor'
import cn from 'classnames'
import { ChangeEventHandler, useEffect } from 'react'

export default function Home() {
  const { color, setColor, randomColor } = useTheme()

  const handleColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.currentTarget.value)
  }

  useEffect(() => {
    randomColor()
  }, [randomColor])

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
