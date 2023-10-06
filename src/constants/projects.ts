type Folder = {
    name: string
    subfolders: Folder[]
}
  
export const folderData: Folder[] = [
    {
      name: 'Carpeta 1',
      subfolders: [
        {
          name: 'Subcarpeta 1.1',
          subfolders: [],
        },
      ],
    },
    {
      name: 'Carpeta 2',
      subfolders: [],
    },
    {
      name: 'Carpeta 3',
      subfolders: [
        {
          name: 'Subcarpeta 3.1',
          subfolders: [],
        },
      ],
    },
  ]
  