import { useState, useContext } from 'react'
import { ScreenDisplayContext } from '../../../context/ScreenDisplayContext'

const ProjectDisplayComponent = () => {
  const [screenNumber, setScreenNumber] = useState(0)
  const { stateScreenDisplay } = useContext(ScreenDisplayContext)
  const handleScreenNumber = () => {
    setScreenNumber((prev) => prev + 1)
  }
  console.log(stateScreenDisplay)

  return (
    <>
      <div>Project Display Component</div>
      <button onClick={handleScreenNumber}>--+sdfsdf</button>
      <div>sdsdf</div>
      <div>{screenNumber}</div>
    </>
  )
}

export default ProjectDisplayComponent
