import { useContext } from 'react'
import { screenDisplayStateContext } from '../context/ScreenDisplayContext'

export const useDisplayScreenState = () => {
  const context = useContext(screenDisplayStateContext)
  if (!context) {
    throw new Error('useDisplayScreenState must be used within a Provider')
  }
  return context
}
