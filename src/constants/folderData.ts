import { Folder } from '../types'

export const folderData: Folder[] = [
  {
    name: 'Carpeta 1',
    content: [
      {
        name: 'Subcarpeta 1.1',
        content: [
          {
            id: '1',
            name: 'Proyecto 1',
            technologies: ['Tecnología A', 'Tecnología B'],
            description: 'Descripción del Proyecto 1',
          },
          {
            id: '2',
            name: 'Proyecto 2',
            technologies: ['Tecnología C', 'Tecnología D'],
            description: 'Descripción del Proyecto 2',
          },
        ],
      },
    ],
  },
  {
    name: 'Carpeta 2',
    content: [
      {
        id: '1',
        name: 'Proyecto 1',
        technologies: ['Tecnología A', 'Tecnología B'],
        description: 'Descripción del Proyecto 1',
      },
      {
        id: '2',
        name: 'Proyecto 2',
        technologies: ['Tecnología C', 'Tecnología D'],
        description: 'Descripción del Proyecto 2',
      },
    ],
  },
  {
    name: 'Carpeta 3',
    content: [
      {
        name: 'Subcarpeta 3.1',
        content: [
          {
            id: '1',
            name: 'Proyecto 1',
            technologies: ['Tecnología A', 'Tecnología B'],
            description: 'Descripción del Proyecto 1',
          },
          {
            id: '2',
            name: 'Proyecto 2',
            technologies: ['Tecnología C', 'Tecnología D'],
            description: 'Descripción del Proyecto 2',
          },
        ],
      },
    ],
  },
]
