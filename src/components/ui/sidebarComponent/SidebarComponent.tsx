// import { useState } from 'react'
import { folderData } from '../../../constants/folderData'
import { FolderComponent } from '../folderComponent/FolderComponent'

const SidebarComponent = () => {
  return (
    <aside className="h-screen resize-x overflow-auto bg-gray-800 min-w-20 w-1/5 max-w-1/12 resize-right ">
      {folderData.map((folder, index) => (
        <FolderComponent
          key={index}
          content={folder?.content}
          name={folder?.name}
          id={folder?.id}
          // isFile={isFile}
          // hasChildren={hasChildren}
          // isExpanded={isExpanded}
        />
      ))}
    </aside>
  )
}

export default SidebarComponent
