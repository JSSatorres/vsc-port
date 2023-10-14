import { ScreenDisplayContext } from '../context/ScreenDisplayContext'
import { useContext } from 'react'

export const useDisplayScreen = () => {
  const { state, addProject } = useContext(ScreenDisplayContext)

  return {
    state,
    addProject,
  }
}
