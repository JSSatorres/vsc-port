import { useState } from 'react'
import { folderData } from '../../../constants/folderData'

type FolderProps = {
  name: string
  subfolders: FolderProps[]
}

const Folder: React.FC<FolderProps> = ({ name, subfolders }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <div
        className={`px-2 py-1 cursor-pointer ${
          isExpanded ? 'text-indigo-600' : 'text-gray-400'
        }`}
        onClick={toggleExpansion}
      >
        {isExpanded ? '▼' : '►'} {name}
      </div>
      {isExpanded && (
        <div className="ml-4">
          {subfolders.map((folder, index) => (
            <Folder key={index} {...folder} />
          ))}
        </div>
      )}
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      {folderData.map((folder, index) => (
        <Folder key={index} {...folder} />
      ))}
    </div>
  )
}

export default Sidebar
