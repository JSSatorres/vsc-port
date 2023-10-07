// import { useState } from 'react'
import { folderData } from '../../../constants/folderData'
import { FolderComponent } from '../folderComponent/FolderComponent'

const SidebarComponent = () => {
  return (
    <div className="h-screen resize-x overflow-auto bg-gray-800 min-w-20 w-1/5 max-w-1/12 resize-right ">
      {folderData.map((folder, index) => (
        <FolderComponent
          key={index}
          subfolders={folder.subfolders}
          name={folder.name}
        />
      ))}
    </div>
  )
}

export default SidebarComponent
