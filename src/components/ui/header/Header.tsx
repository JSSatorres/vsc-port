// import Button from '../../atoms/button'
import SearchComponent from '../SearchComponent/SearchComponent'
import { IconBrandVscode } from '@tabler/icons-react'
import { LINKS } from './headerConstants'

const Header = () => {
  // const handleButtonClick = () => {
  //   // Lógica de manejo de clic aquí
  // }

  return (
    <header className="bg-darker py-2 grid grid-cols-5 gap-4">
      <nav className="flex items-center">
        <IconBrandVscode color="cyan" className="mx-2" />{' '}
        {/* Reemplaza "fa-home" con el nombre de tu icono */}
        <ul className="flex items-center">
          {LINKS.map((link) => (
            <li className="bg-darker text-sm mx-2 text-white" key={link}>
              {link}
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center col-start-3">
        <SearchComponent />
      </div>
    </header>
  )
}

export default Header
