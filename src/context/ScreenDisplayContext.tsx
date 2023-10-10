import { createContext } from 'react'
import { type ScreenDisplayProviderContext } from '../types'

export const ScreenDisplayContext =
  createContext<ScreenDisplayProviderContext | null>(null)
