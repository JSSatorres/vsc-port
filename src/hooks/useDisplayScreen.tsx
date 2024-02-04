import { SCREEN_DIDPLAY_CONTEXT_ACTIONS } from '../constants/contextConstans'
import { IdFormat } from '../types'
import { useDisplayScreenDispatch } from './useDisplayScreenDispatch'
import { useDisplayScreenState } from './useDisplayScreenState'

export const useDisplayScreen = () => {
  const displayScreenState = useDisplayScreenState()
  const displayScreenDispatch = useDisplayScreenDispatch()

  const addProjectDispatch = (id: IdFormat): void => {
    displayScreenDispatch({
      type: SCREEN_DIDPLAY_CONTEXT_ACTIONS.ADD_PROJECT,
      payload: id,
    })
  }

  const deleteProjectDispatch = (id: IdFormat) => {
    displayScreenDispatch({
      type: SCREEN_DIDPLAY_CONTEXT_ACTIONS.DELETE_PROJECT,
      payload: id,
    })
  }

  return {
    currentScreenData: displayScreenState.currentScreenData,
    screensNumber: displayScreenState.screensNumber,
    addProjectDispatch,
    deleteProjectDispatch,
  }
}
