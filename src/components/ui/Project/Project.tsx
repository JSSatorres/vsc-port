import { type Project } from '../../../types'

interface ProjectProps {
  dataProject: Project
}
const Project: React.FC<ProjectProps> = ({ dataProject }) => {
  const { name, language, mainTechnology, id, technologies } = dataProject
  console.log(id)

  return (
    <div className="text-white">
      <h2>{name}</h2>
      <h2>{id}</h2>
      <h2>{language}</h2>
      <h2>{mainTechnology}</h2>
      <h2>
        {technologies.map((technology) => (
          <h2>{technology}</h2>
        ))}
      </h2>
    </div>
  )
}

export default Project
// : React.FC<Folder>
