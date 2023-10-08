import Header from '../../components/ui/header/Header'
// import { Outlet } from 'react-router-dom'
import SidebarComponent from '../../components/ui/sidebarComponent/SidebarComponent'
import ProjectDisplayComponent from '../../components/ui/projectDisplayComponent/ProjectDisplayComponent'
import { ScreenDisplayProvider } from '../../context/ScreenDisplayProvider'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <ScreenDisplayProvider>
          <SidebarComponent />
          <ProjectDisplayComponent />
        </ScreenDisplayProvider>
      </div>
    </>
  )
}

export default HomePage
