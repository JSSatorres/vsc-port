import Header from '../../components/ui/header/Header'
import { Outlet } from 'react-router-dom'
import SidebarComponent from '../../components/ui/sidebarComponent/SidebarComponent'

const HomePage = () => {
  return (
    <>
      <Header />
      <SidebarComponent />
      <Outlet />
    </>
  )
}

export default HomePage
