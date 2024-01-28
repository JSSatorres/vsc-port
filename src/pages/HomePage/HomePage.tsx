import Header from '../../components/ui/header/Header'
import SidebarComponent from '../../components/ui/sidebarComponent/SidebarComponent'
import ProjectDisplayComponent from '../../components/ui/projectDisplayComponent/ProjectDisplayComponent'
import { ScreenDisplayProvider } from '../../context/ScreenDisplayContext'

const HomePage = () => {
  return (
    <ScreenDisplayProvider>
      <main className="h-100 overflow-hidden">
        <Header />
        <section className="flex">
          <SidebarComponent />
          <section className="w-full">
            <ProjectDisplayComponent />
          </section>
        </section>
      </main>
    </ScreenDisplayProvider>
  )
}

export default HomePage
