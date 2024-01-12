import { Navigation } from './routes/Navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App(): JSX.Element {
  return (
    <>
      <Navigation />
      <ToastContainer theme="dark" autoClose={3000} closeOnClick pauseOnHover />
    </>
  )
}

export default App
