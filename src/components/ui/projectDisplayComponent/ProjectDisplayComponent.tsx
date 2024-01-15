import { useDisplayScreen } from '../../../hooks/useDisplayScreen'
import { isArrayWithData } from '../../../utils/utils'
import Project from '../Project/Project'

const ProjectDisplayComponent = () => {
  const { currentScreenData } = useDisplayScreen()

  return (
    <section className="flex w-full flex-nowrap">
      {isArrayWithData(currentScreenData) ? (
        currentScreenData.map((project) => (
          <div key={project?.id} className="flex-1">
            {project && <Project dataProject={project} />}
          </div>
        ))
      ) : (
        <p className="text-white">No projects added</p>
      )}
    </section>
  )
}

export default ProjectDisplayComponent
