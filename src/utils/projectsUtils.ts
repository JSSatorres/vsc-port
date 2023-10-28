import { PROJECTS } from '../constants/projects'
import { IdFormat, type Project } from '../types'

export const getProjectsByTechnology = ({
  language,
  mainTechnology,
}: {
  language: string
  mainTechnology?: string
}): Project[] => {
  return PROJECTS.filter(
    (project) =>
      project.language === language &&
      (mainTechnology ? project.mainTechnology === mainTechnology : true),
  )
}

export const getProjectsParams = (language: string, mainTechnology: string) => {
  return { language, mainTechnology }
}

export const isElementInArrayById = (
  id: IdFormat,
  arraydata: (Project | undefined)[],
): boolean | undefined => {
  const isIdInArray = arraydata.some((element) => element?.id === id)
  return isIdInArray
}
