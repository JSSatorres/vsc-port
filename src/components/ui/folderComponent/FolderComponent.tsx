import { useState } from 'react'
import { IconFolderFilled } from '@tabler/icons-react'
import { IconFolderDown } from '@tabler/icons-react'
import { IconChevronDown } from '@tabler/icons-react'
import { IconChevronRight } from '@tabler/icons-react'
import { IconFileDescription } from '@tabler/icons-react'
import { type Folder } from '../../../types'

export const FolderComponent: React.FC<Folder> = ({ name, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }
  // console.log(content)

  const isLast = () => {
    return content === undefined
  }
  // // ${
  // //   isExpanded ? 'text-indigo-600' : 'text-gray-400'
  // // }
  // console.log(isLast())
  // console.log(name, content)

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
          </> /*: isLast() ? (
          <IconFileDescription />
        ) : */
        ) : isLast() ? (
          <IconFileDescription />
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
            <FolderComponent key={index} {...folder} />
          ))}
        </div>
      )}
    </div>
  )
}
