// import { useState } from 'react'
import { folderData } from '../../../constants/folderData'
import { FolderComponent } from '../folderComponent/FolderComponent'

const SidebarComponent = () => {
  return (
    <div className="SidebarComponent">
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
