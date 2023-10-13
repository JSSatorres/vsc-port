// import { folderData } from '../constants/folderData'
import { ScreenDisplayContext } from './ScreenDisplayContext'
import { type ScreenContext } from '../types'
import { type Project } from '../types'
import { type ScreenDisplayAction } from '../types'

import { useReducer } from 'react'
import { PROJECTS } from '../constants/projects'

export const INITIAL_STATE: ScreenContext = {
  screenNumber: 2,
  currentScreen: 1,
  currentScreenData: [PROJECTS[0]],
}

export const ScreenDispplayReducer = (
  state: ScreenContext,
  action: ScreenDisplayAction,
): ScreenContext => {
  switch (action.type) {
    case 'addProject':
      return {
        ...state,
        screenNumber: state.screenNumber + 1,
        currentScreenData: [...state.currentScreenData, action.payload],
      }
    default:
      return state
  }
}
interface ScreenDisplayProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const ScreenDisplayProvider = ({
  children,
}: ScreenDisplayProviderProps) => {
  const [stateScreenDisplay, screenDisplayDispatch] = useReducer(
    ScreenDispplayReducer,
    INITIAL_STATE,
  )
  const addProject = (project: Project) => {
    screenDisplayDispatch({ type: 'addProject', payload: project })
  }

  const deleteProject = (project: Project) => {
    screenDisplayDispatch({ type: 'addProject', payload: project })
  }

  return (
    <ScreenDisplayContext.Provider
      value={{
        state: stateScreenDisplay,
        addProject: addProject,
        deleteProject: deleteProject,
      }}
    >
      {children}
    </ScreenDisplayContext.Provider>
  )
}

// const setAddScreenDisplay = (
//   state: ScreenContext,
//   action: {
//     type: string
//     payload: Project
//   },
// ) => ({
//   ...state,
//   screenNumber: folderData.length,
//   currentScreen: 1,
//   currentScreenData: [...state.currentScreenData, action.payload],
// })

// const setDeleteScreenDisplay = (
//   state: ScreenContext,
//   action: ScreenDisplayAction,
// ) => ({
//   ...state,
//   screenNumber: folderData.length,
//   currentScreen: 1,
//   currentScreenData: state.currentScreenData.filter(
//     (project) => project.id !== action.payload.id,
//   ),
// })

// const ScreenDisplayReducer = (
//   state: ScreenContext,
//   action: {
//     type: string
//     payload: Project
//   },
// ) => {
//   if (action.type === 'addProject') {
//     return setAddScreenDisplay(state, action.payload)
//   }
//   // if (action.type === 'deleteProject') {
//   //   return setAddScreenDisplay(state, action.payload)
//   // }
//   return state
// }
