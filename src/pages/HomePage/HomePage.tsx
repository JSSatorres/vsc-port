import Header from '../../components/ui/header/Header'
import SidebarComponent from '../../components/ui/sidebarComponent/SidebarComponent'
import ProjectDisplayComponent from '../../components/ui/projectDisplayComponent/ProjectDisplayComponent'
import TopBar from '../../components/ui/topBar/TopBar'

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <SidebarComponent />
        <div className="w-full">
          <TopBar />
          <ProjectDisplayComponent />
        </div>
      </div>
    </>
  )
}

export default HomePage
