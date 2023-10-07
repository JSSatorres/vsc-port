import Header from '../../components/ui/header/Header'
import { Outlet } from 'react-router-dom'
import SidebarComponent from '../../components/ui/sidebarComponent/SidebarComponent'
import ProjectDisplayComponent from '../../components/ui/projectDisplayComponent/ProjectDisplayComponent'

const HomePage = () => {
  return (
    <>
      <Header />
      <SidebarComponent />
      <ProjectDisplayComponent />

      <Outlet />
    </>
  )
}

export default HomePage
