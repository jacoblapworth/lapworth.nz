import { ChangeEventHandler, useEffect, useState } from 'react'

import cn from 'classnames'

export default function Home() {
  const [color, setColor] = useState('initialState')
  const handleColor: ChangeEventHandler<HTMLInputElement> = (e) => {
    setColor(e.currentTarget.value)
  }

  return (
    <div className="m-4 flex flex-col flex-grow text-center uppercase font-serif">
      <style jsx global>{`
        root {
          --j-colors-background: ${color};
        }
      `}</style>
      <input
        className={cn('w-12', 'h-12', 'rounded-full', 'border-2')}
        type="color"
        value={color}
        onChange={handleColor}
      />
    </div>
  )
}
