import { createContext } from 'react'
import { type ScreenDisplayProviderContext } from '../types'
import { INITIAL_STATE } from './ScreenDisplayProvider'

export const ScreenDisplayContext = createContext<ScreenDisplayProviderContext>(
  { state: INITIAL_STATE, addProject: () => {}, deleteProject: () => {} },
)
