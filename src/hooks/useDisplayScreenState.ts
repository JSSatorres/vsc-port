import { useContext } from 'react'
import { screenDisplayDispatch } from '../context/ScreenDisplayContext'

export const useDisplayScreenState = () => {
  const context = useContext(screenDisplayDispatch)
  if (context === undefined) {
    throw new Error(
      'useDisplayScreenState must be used within a useDisplayScreenState',
    )
  }
  return context
}
