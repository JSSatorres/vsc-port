import { createContext } from 'react'
import { type ScreenContext } from '../types'

interface ScreenDisplayContext {
  screenContext: ScreenContext
}

export const ScreenDisplayContext = createContext<ScreenDisplayContext>(
  {} as ScreenDisplayContext,
)
