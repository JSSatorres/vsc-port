// import Button from '../../atoms/button'
import SearchComponent from '../SearchComponent/SearchComponent'
import { IconBrandVscode } from '@tabler/icons-react'
// import { LINKS } from './headerConstants'

const Header = () => {
  // const handleButtonClick = () => {
  //   // Lógica de manejo de clic aquí
  // }

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

{
  /* <ul className="flex items-center">
          {LINKS.map((link) => (
            <li className="bg-darker text-sm mx-2 text-white" key={link}>
              {link}
            </li>
          ))}
        </ul> */
}
