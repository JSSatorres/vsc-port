// import { Children } from 'react'
import { folderData } from '../constants/folderData'
import { ScreenDisplayContext } from './ScreenDisplayContext'

const initialState = {
  screens: [folderData[0].subfolders],
}

interface ScreenDisplayProviderProps {
  children: JSX.Element | JSX.Element[]
}

export const ScreenDisplayProvider = ({
  children,
}: ScreenDisplayProviderProps) => {
  return (
    <ScreenDisplayContext.Provider value={{}}>
      {children}
    </ScreenDisplayContext.Provider>
  )
}
