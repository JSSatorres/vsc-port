export interface Project {
  readonly id: `${string}-${string}-${string}-${string}-${string}`
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
}

interface ScreenContext {
  screenNumber: number
  currentScreen: number
  currentScreenData: Project[]
}

interface ScreenDisplayProviderContext {
  state: ScreenContext
  addProject: (project: Project) => void
  deleteProject: (project: Project) => void
}
interface ProjectName {
  id: string
  name: string
}

type ScreenDisplayAction =
  | { type: 'addProject'; payload: Project }
  | { type: 'deleteProject'; payload: { id: number } }
// to import interface :  import {type Project } from 'path'
