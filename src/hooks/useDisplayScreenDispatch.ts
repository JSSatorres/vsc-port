import { useContext } from 'react'
import { screenDisplayDispatchContext } from '../context/ScreenDisplayContext'

export const useDisplayScreenDispatch = () => {
  const context = useContext(screenDisplayDispatchContext)
  if (!context) {
    throw new Error('useDisplayScreenDispatch must be used within a Provider')
  }
  return context
}
