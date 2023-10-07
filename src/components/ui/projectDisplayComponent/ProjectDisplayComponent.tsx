import { useState } from 'react'

const ProjectDisplayComponent = () => {
  const [screenNumber, setScreenNumber] = useState(0)
  const handleScreenNumber = () => {
    setScreenNumber((prev) => prev + 1)
  }
  return (
    <>
      <div>Project Display Component</div>
      <button onClick={handleScreenNumber}>+</button>
      <div>{screenNumber}</div>
    </>
  )
}

export default ProjectDisplayComponent
