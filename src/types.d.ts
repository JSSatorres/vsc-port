import { Dispatch } from 'react'

type IdFormat = `${string}-${string}-${string}-${string}-${string}`
type IdProject = { id: IdFormat }
export interface Project {
  readonly id: IdFormat
  readonly name: string
  readonly technologies: Technology[]
  readonly description: string
  readonly mainTechnology: string
  readonly language: string
  readonly isFocussed?: boolean
}

type Technology = string

type Folder = {
  name: string
  content?: (Folder | Project)[]
  isFile?: boolean
  id?: IdFormat
}

export type ScreenContext = {
  screensNumber: number
  currentScreen: number
  currentScreenData: (Project | undefined)[]
}

interface ProjectName {
  id: string
  name: string
}
type ScreenDisplayActionType =
  | { type: 'addProject'; payload: IdFormat }
  | { type: 'deleteProject'; payload: IdFormat }

type ScreenDisplayDispatch = Dispatch<ScreenDisplayActionType>
// to import interface :  import {type Project } from 'path'
