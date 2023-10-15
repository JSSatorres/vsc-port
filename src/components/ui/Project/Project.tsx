import { type Project } from '../../../types'

interface ProjectProps {
  dataProject: Project
}
const Project: React.FC<ProjectProps> = ({ dataProject }) => {
  const { name, language, mainTechnology, technologies } = dataProject

  return (
    <div className="text-white my-5 mx-3">
      <h3 className="text-4xl font-bold mb-4 flex flex-col items-center justify-center">
        {name}
      </h3>

      <p className="text-2xl text-gray-400">Language: {language}</p>
      <p className="text-2xl text-gray-400">
        Main Technology: {mainTechnology}
      </p>
      <div className="my-4">
        <h2 className="text-3xl text-gray-400">Technologies:</h2>
        <ul className="list-inside list-disc text-2xl">
          {technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Project
