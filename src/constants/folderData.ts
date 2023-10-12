import { type Folder } from '../types'
import { getProjectsByTechnology } from '../utils/projectsUtils'

export const folderData: Folder[] = [
  {
    name: 'Javascript',
    content: [
      {
        name: 'React',
        content: getProjectsByTechnology({
          language: 'JavaScript',
          mainTechnology: 'React',
        }),
      },
      {
        name: 'Vue',
        content: getProjectsByTechnology({
          language: 'JavaScript',
          mainTechnology: 'Vue',
        }),
      },
      {
        name: 'Node',
        content: getProjectsByTechnology({
          language: 'JavaScript',
          mainTechnology: 'Vue',
        }),
      },
    ],
  },
  {
    name: 'TypeScript',
    content: [
      {
        name: 'React',
        content: getProjectsByTechnology({
          language: 'TypeScript',
          mainTechnology: 'React',
        }),
      },
      {
        name: 'Vue',
        content: getProjectsByTechnology({
          language: 'TypeScript',
          mainTechnology: 'Vue',
        }),
      },
      {
        name: 'Node',
        content: getProjectsByTechnology({
          language: 'TypeScript',
          mainTechnology: 'Vue',
        }),
      },
    ],
  },
  {
    name: 'Python',
    content: [
      {
        name: 'WebScrapping',
        content: getProjectsByTechnology({
          language: 'Python',
          mainTechnology: 'WebScrapping',
        }),
      },
      {
        name: 'FastApi',
        content: getProjectsByTechnology({
          language: 'Python',
          mainTechnology: 'FastApi',
        }),
      },
    ],
  },
  {
    name: 'PHP',
    content: getProjectsByTechnology({
      language: 'PHP',
    }),
  },
]
