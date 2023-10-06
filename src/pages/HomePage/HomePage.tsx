import Header from '../../components/ui/header/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/ui/sidebar/Sidebar'

const HomePage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}

export default HomePage
