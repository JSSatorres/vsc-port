import { type Project } from '../../../types'

interface ProjectProps {
  dataProject: Project
}
const Project: React.FC<ProjectProps> = ({ dataProject }) => {
  const { name, language, mainTechnology, id, technologies } = dataProject
  console.log(id)

  return (
    <div className="text-white">
      <h3>{name}</h3>
      <h3>{id}</h3>
      <h3>{language}</h3>
      <h3>{mainTechnology}</h3>
      <h3>
        {technologies.map((technology, index) => (
          <p key={index}>{technology}</p>
        ))}
      </h3>
    </div>
  )
}

export default Project
// : React.FC<Folder>
