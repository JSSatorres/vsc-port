import { useContext } from 'react'
import { ScreenDisplayContext } from '../../../context/ScreenDisplayContext'
import Project from '../Project/Project'

const ProjectDisplayComponent = () => {
  // const [screenNumber, setScreenNumber] = useState(0)
  const { state } = useContext(ScreenDisplayContext)
  // const handleScreenNumber = () => {
  //   setScreenNumber((prev) => prev + 1)
  // }
  console.log(state)
  // console.log(screenNumber)

  return (
    <section className="flex justify-start">
      {Array.from({ length: state.screenNumber }).map((_, index) => (
        <div key={index}>
          <Project dataProject={state.currentScreenData[0]} />
        </div>
      ))}
      {/* <button onClick={handleScreenNumber}>Add Screen</button> */}
    </section>
  )
}

export default ProjectDisplayComponent
