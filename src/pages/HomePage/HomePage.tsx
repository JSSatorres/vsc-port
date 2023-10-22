import Header from '../../components/ui/header/Header'
// import { Outlet } from 'react-router-dom'
import SidebarComponent from '../../components/ui/sidebarComponent/SidebarComponent'
import ProjectDisplayComponent from '../../components/ui/projectDisplayComponent/ProjectDisplayComponent'
import { ScreenDisplayProvider } from '../../context/ScreenDisplayProvider'
import TopBar from '../../components/ui/topBar/TopBar'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <ScreenDisplayProvider>
          <SidebarComponent />
          <div className="w-full">
            <TopBar />
            <ProjectDisplayComponent />
          </div>
        </ScreenDisplayProvider>
      </div>
    </>
  )
}

export default HomePage
