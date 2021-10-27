import { ChangeEventHandler, useEffect } from 'react'

import cn from 'classnames'

import { useTheme } from '@/components/Providers/BgColor'

export default function Home() {
  const { color, setColor, randomColor } = useTheme()

  const handleColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.currentTarget.value)
  }

  useEffect(() => {
    randomColor()
  }, [randomColor])

  return (
    <div className="m-4 flex flex-col flex-grow text-center uppercase font-serif">
      <input
        className={cn('w-12', 'h-12', 'rounded-full', 'border-2')}
        type="color"
        value={color}
        onChange={handleColor}
      />
    </div>
  )
}
