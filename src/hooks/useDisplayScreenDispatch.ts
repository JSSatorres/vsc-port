import { useContext } from 'react'
import { screenDisplayDispatch } from '../context/ScreenDisplayContext'

export const useDisplayScreenDispatch = () => {
  const context = useContext(screenDisplayDispatch)
  if (context === undefined) {
    throw new Error(
      'useDisplayScreenDispatch must be used within a useDisplayScreenDispatch',
    )
  }
  return context
}
