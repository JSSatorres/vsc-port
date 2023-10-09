export interface Project {
  id: string
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
  currentScreenData: Project | Project[] | []
}
interface ProjectName {
  id: string
  name: string
}
// to import interface :  import {type Project } from 'path'
