import { Navigation } from './routes/Navigation'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { ScreenDisplayProvider } from './context/ScreenDisplayContext'

function App(): JSX.Element {
  return (
    <ScreenDisplayProvider>
      <Navigation />
      <ToastContainer />
    </ScreenDisplayProvider>
  )
}

export default App
