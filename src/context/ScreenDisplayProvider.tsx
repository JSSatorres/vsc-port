// import { folderData } from '../constants/folderData'
import { ScreenDisplayContext } from './ScreenDisplayContext'
import {
  ScreenContext,
  Project,
  type IdProject,
  type IdFormat,
  type ScreenDisplayAction,
} from '../types'

import { useReducer } from 'react'
import { PROJECTS } from '../constants/projects'

export const INITIAL_STATE: ScreenContext = {
  screenNumber: 1,
  currentScreen: 1,
  currentScreenData: [PROJECTS[0]],
}

const projectToAdd = (currentScreenData: Project[], id: IdFormat) => {
  if (!id) return
  console.log(currentScreenData)
  console.log(id)

  const isIdInState = currentScreenData.find((project) => project.id === id)
  if (isIdInState) return [...currentScreenData]
  console.log(id)
  return [...currentScreenData, PROJECTS?.find((project) => project.id === id)]
}

export const ScreenDispplayReducer = (
  state: ScreenContext,
  action: ScreenDisplayAction,
): ScreenContext => {
  switch (action.type) {
    case 'addProject':
      if (projectToAdd) {
        return {
          ...state,
          screenNumber: state.screenNumber + 1,
          currentScreenData: projectToAdd(
            state.currentScreenData as Project[],
            action.payload,
          ),
        }
      }
      return state
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
  const addProject = (id: IdFormat) => {
    screenDisplayDispatch({ type: 'addProject', payload: id })
  }

  // const deleteProject = (id: Project) => {
  //   screenDisplayDispatch({ type: 'addProject', payload: id })
  // }

  return (
    <ScreenDisplayContext.Provider
      value={{
        state: stateScreenDisplay,
        addProject: addProject,
        // deleteProject: deleteProject,
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
