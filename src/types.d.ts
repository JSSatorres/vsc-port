type IdFormat = `${string}-${string}-${string}-${string}-${string}`
type IdProject = { id: IdFormat }
export interface Project {
  readonly id: IdFormat
  readonly name: string
  readonly technologies: Technology[]
  readonly description: string
  readonly mainTechnology: string
  readonly language: string
}

type Technology = string

type Folder = {
  name: string
  content?: (Folder | Project)[]
  isFile?: boolean
  id?: IdFormat
}

interface ScreenContext {
  screenNumber: number
  currentScreen: number
  currentScreenData: Project[]
}

interface ScreenDisplayProviderContext {
  state: ScreenContext
  addProject: (id: IdFormat) => void
}
interface ProjectName {
  id: string
  name: string
}

type ScreenDisplayAction =
  | {
      type: 'addProject'
      payload: IdFormat
    }
  | { type: 'deleteProject'; payload: IdFormat }
// to import interface :  import {type Project } from 'path'
