// import { Children } from 'react'
import { folderData } from '../constants/folderData'
import { ScreenDisplayContext } from './ScreenDisplayContext'
import { type ScreenContext } from '../types'
import { type Project } from '../types'
import { useReducer } from 'react'

const initialState: ScreenContext = {
  screenNumber: folderData.length,
  currentScreen: 1,
  currentScreenData: [] as Project[],
}
type ScreenDisplayAction =
  | { type: 'addProject'; payload: Project }
  | { type: 'deleteProject'; payload: { id: number } }

export const ScreenDispplayReducer = (
  state: ScreenContext,
  action: ScreenDisplayAction,
): ScreenContext => {
  switch (action.type) {
    case 'addProject':
      return {
        ...state,
        currentScreenData: [
          ...(state.currentScreenData as Project | Project[] | []),
          action.payload,
        ],
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
  const [stateScreenDisplay, dispatchScreenDisplay] = useReducer(
    ScreenDispplayReducer,
    initialState,
  )
  const addProject = (project: Project) => {
    dispatchScreenDisplay({ type: 'addProject', payload: project })
  }

  const deleteProject = (project: Project) => {
    dispatchScreenDisplay({ type: 'addProject', payload: project })
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
