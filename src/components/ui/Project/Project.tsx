import { useDisplayScreen } from '../../../hooks/useDisplayScreen'
import { IdFormat, type Project } from '../../../types'
import { IconX } from '@tabler/icons-react'

interface ProjectProps {
  dataProject: Project
}
const Project: React.FC<ProjectProps> = ({ dataProject }) => {
  const { name, language, mainTechnology, technologies, id } = dataProject
  const { deleteProjectDispatch } = useDisplayScreen()

  const handleDelete = (id: IdFormat): void => {
    deleteProjectDispatch(id)
  }

  return (
    <div className="flex flex-col text-white py-5 px-3 border-2 min-h-max border-shadow-2xl animate-bounce-slow items-center  justify-center">
      <IconX
        className="cursor-pointer ml-4 mr-1 hover:bg-grey place-self-end"
        onClick={() => handleDelete(id)}
      />
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
