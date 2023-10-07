// import { useState } from 'react'
import { folderData } from '../../../constants/folderData'
import { FolderComponent } from '../folderComponent/FolderComponent'

const Sidebar = () => {
  return (
    <div className="sidebar">
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

export default Sidebar
