import { useState } from 'react'
import { IconFolderFilled } from '@tabler/icons-react'
import { IconFolderDown } from '@tabler/icons-react'
import { IconChevronDown } from '@tabler/icons-react'
import { IconChevronRight } from '@tabler/icons-react'
import { IconFileDescription } from '@tabler/icons-react'
import { type Folder } from '../../../types'
import { useDisplayScreen } from '../../../hooks/useDisplayScreen'

export const FolderComponent: React.FC<Folder> = ({
  name,
  content,
  isFile,
  id,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isFileMyChildren, setIsFileMyChildren] = useState<boolean | undefined>(
    false,
  )

  const { addProjectDispatch } = useDisplayScreen()

  const toggleExpansion = () => {
    setIsFileMyChildren(!content?.some((folder) => 'content' in folder))

    id && addProjectDispatch(id)
    setIsExpanded(!isExpanded)
  }

  return (
    <div>
      <div
        className={`flex px-3 py-1 cursor-pointer text-white ${
          isExpanded ? 'text-indigo-600' : 'text-gray-400'
        }`}
        onClick={toggleExpansion}
      >
        {!isExpanded ? (
          <>
            <IconChevronRight size={20} />
            <IconFolderFilled size={20} />
          </>
        ) : isFile && !content ? (
          <>
            <IconChevronRight size={20} />
            <IconFileDescription size={20} />
          </>
        ) : (
          <>
            <IconChevronDown size={20} />
            <IconFolderDown size={20} />
          </>
        )}{' '}
        <span className="ml-1">{name}</span>
      </div>
      {isExpanded && (
        <div className="ml-4">
          {content?.map((folder, index) => (
            <FolderComponent
              key={index}
              isFile={isFileMyChildren}
              {...folder}
            />
          ))}
        </div>
      )}
    </div>
  )
}
