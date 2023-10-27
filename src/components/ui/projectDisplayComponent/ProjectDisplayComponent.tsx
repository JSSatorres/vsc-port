import { useDisplayScreen } from '../../../hooks/useDisplayScreen'
import Project from '../Project/Project'

const ProjectDisplayComponent = () => {
  // const [screenNumber, setScreenNumber] = useState(0)
  // useDisplayScreen
  const { currentScreenData } = useDisplayScreen()

  console.log(currentScreenData)

  return (
    <section className="flex justify-start w-full">
      {currentScreenData &&
        currentScreenData.map((project) => (
          <div key={project?.id}>
            {project && <Project dataProject={project} />}
          </div>
        ))}
    </section>
  )
}

export default ProjectDisplayComponent
