import { useState } from 'react'
// import { type ProjectName } from '../../../types'
import { type Folder } from '../../../types'

export const FolderComponent: React.FC<Folder> = ({ name, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    if (isLast()) {
      console.log('Clic en el último elemento')
      return
    }
    setIsExpanded(!isExpanded)
  }
  const isLast = () => {
    return content?.length === 0
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
          {content?.map((folder, index) => (
            <FolderComponent key={index} {...folder} />
          ))}
        </div>
      )}
    </div>
  )
}
