import SearchComponent from '../SearchComponent/SearchComponent'
import { IconBrandVscode } from '@tabler/icons-react'

const Header = () => {
  return (
    <header className="bg-dark-gradient py-2 grid grid-cols-5 gap-4">
      <div className="flex items-center col-span-1">
        <IconBrandVscode color="cyan" className="mx-2" />
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <SearchComponent />
      </div>
    </header>
  )
}

export default Header
