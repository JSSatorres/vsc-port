import { useDisplayScreen } from '../../../hook/useDisplayScreen'
import Project from '../Project/Project'

const ProjectDisplayComponent = () => {
  // const [screenNumber, setScreenNumber] = useState(0)
  // useDisplayScreen
  const { state } = useDisplayScreen()

  console.log(state)

  return (
    <section className="flex justify-start">
      {state.currentScreenData &&
        state.currentScreenData.map((project) => (
          <div key={project?.id}>
            {project && <Project dataProject={project} />}
          </div>
        ))}
    </section>
  )
}

export default ProjectDisplayComponent
