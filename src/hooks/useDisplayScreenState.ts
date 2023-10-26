import { useContext } from 'react'
import { screenDisplayContextState } from '../context/ScreenDisplayContext'

export const useDisplayScreenState = () => {
  const context = useContext(screenDisplayContextState)
  if (context === undefined) {
    throw new Error(
      'useDisplayScreenState must be used within a useDisplayScreenState',
    )
  }
  return context
}
