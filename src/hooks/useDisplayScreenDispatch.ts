import { useContext } from 'react'
import { screenDisplayContextDispatch } from '../context/ScreenDisplayContext'

export const useDisplayScreenDispatch = () => {
  const context = useContext(screenDisplayContextDispatch)
  if (context === undefined) {
    throw new Error(
      'useDisplayScreenDispatch must be used within a useDisplayScreenDispatch',
    )
  }
  return context
}
