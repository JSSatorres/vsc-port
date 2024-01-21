import { createContext, useReducer } from 'react'
import { toast } from 'react-toastify'
import { PROJECTS } from '../constants/projects'
import {
  type IdFormat,
  ScreenContext,
  type ScreenDisplayActionType,
} from '../types'
import { isElementInArrayById } from '../utils/projectsUtils'
import { SCREEN_DIDPLAY_CONTEXT_ACTIONS } from '../constants/contextConstans'

const INITIAL_STATE: ScreenContext = {
  screensNumber: 1,
  currentScreen: 1,
  currentScreenData: [PROJECTS[0]],
}
type Dispatch = (action: ScreenDisplayActionType) => void

export const screenDisplayStateContext =
  createContext<ScreenContext>(INITIAL_STATE)

export const screenDisplayDispatchContext = createContext<Dispatch>(null!)

const addProject = (state: ScreenContext, id: IdFormat) => {
  const { currentScreenData } = state
  const isIdinState = isElementInArrayById(id, currentScreenData)

  if (!id || isIdinState) {
    toast.success('the project is active')
    return state
  }

  if (state.screensNumber >= 4) {
    toast.warn('the maximum number of projects has been reached')
    return state
  }

  const project = PROJECTS?.find((project) => project.id === id)

  const updatedCurrentScreenData = [
    ...currentScreenData,
    { ...project, isFocused: true },
  ]

  // Establece un temporizador para establecer el isFocused en false después de 1 segundo
  // setTimeout(() => {
  //   updatedCurrentScreenData?.[
  //     updatedCurrentScreenData.length - 1
  //   ].isFocused?. = false;
  // }, 1000)

  return {
    ...state,
    currentScreenData: updatedCurrentScreenData,
    screensNumber: state.screensNumber + 1,
  }
}

const deleteProject = (state: ScreenContext, id: IdFormat) => {
  const { currentScreenData } = state
  const isIdinState = isElementInArrayById(id, currentScreenData)

  if (!id || !isIdinState) {
    return state
  }

  const newCurrentScreenData = currentScreenData?.filter(
    (project) => project?.id !== id,
  )

  return {
    ...state,
    currentScreenData: newCurrentScreenData,
    screensNumber: state.screensNumber - 1,
  }
}

export const ScreenDisplayReducer = (
  state: ScreenContext | undefined,
  action: ScreenDisplayActionType,
): ScreenContext | undefined => {
  if (!state) return INITIAL_STATE
  switch (action.type) {
    case SCREEN_DIDPLAY_CONTEXT_ACTIONS.ADD_PROJECT:
      return addProject(state, action.payload)
    case SCREEN_DIDPLAY_CONTEXT_ACTIONS.DELETE_PROJECT:
      return deleteProject(state, action.payload)
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
  const [state, dispatch] = useReducer<ScreenContext, ScreenDisplayActionType>(
    ScreenDisplayReducer,
    INITIAL_STATE,
    (state) => state,
  )

  return (
    <screenDisplayStateContext.Provider value={state}>
      <screenDisplayDispatchContext.Provider value={dispatch}>
        {children}
      </screenDisplayDispatchContext.Provider>
    </screenDisplayStateContext.Provider>
  )
}
