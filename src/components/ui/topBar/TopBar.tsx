import { useState } from 'react'

const TopBar = () => {
  const [first /*setfirst*/] = useState('pepe')
  return (
    <div className="bg-darkest w-full h-auto text-white">
      <p>{first}</p>
    </div>
  )
}

export default TopBar
