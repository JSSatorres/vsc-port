// import Button from '../../atoms/button'
import { useDisplayScreen } from '../../../hooks/useDisplayScreen'
import SearchComponent from '../SearchComponent/SearchComponent'
import { IconBrandVscode } from '@tabler/icons-react'
// import { LINKS } from './headerConstants'

const Header = () => {
  // const handleButtonClick = () => {
  //   // Lógica de manejo de clic aquí
  // }

  const test = () => {
    console.log(state)
    addProject('c9dfc08c-6be5-4018-ac5b-7c8d14c2bcc7')
  }
  const { state, addProject } = useDisplayScreen()
  return (
    <header className="bg-dark-gradient py-2 grid grid-cols-5 gap-4">
      <div className="flex items-center col-span-1">
        <IconBrandVscode color="cyan" className="mx-2" />
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <SearchComponent />
      </div>
      <button onClick={test}>dale</button>
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
