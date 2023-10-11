export interface Project {
  id: `${string}-${string}-${string}-${string}-${string}`
  name: string
  technologies: Technology[]
  description: string
}

type Technology = string

type Folder = {
  name: string
  content?: Folder[] | Project[]
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
// to import interface :  import {type Project } from 'path'
