import Button from '../../atoms/button'
import { LINKS } from './headerConstants'

const Header = () => {
  const handleButtonClick = () => {
    // Lógica de manejo de clic aquí
  }

  return (
    <header className="bg-gray-900 p-4">
      <nav className="flex items-center">
        {/* <Icon name="fa-home" />{' '} */}
        {/* Reemplaza "fa-home" con el nombre de tu icono */}
        <ul className="flex items-center">
          {LINKS.map((link) => (
            <li className="text-xl ml-2 text-white" key={link}>
              {link}
            </li>
          ))}
        </ul>
        <Button text="Iniciar Sesión" onClick={handleButtonClick} />
      </nav>
    </header>
  )
}

export default Header

// <div className="main-layout">
// <nav>
//   <img src={logo} alt="React Logo" />
//   <ul>
//     <li>
//       <NavLink
//         to="/home"
//         className={({ isActive }) => (isActive ? 'nav-active' : '')}
//       >
//         Home
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/about"
//         className={({ isActive }) => (isActive ? 'nav-active' : '')}
//       >
//         About
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/users"
//         className={({ isActive }) => (isActive ? 'nav-active' : '')}
//       >
//         Users
//       </NavLink>
//     </li>
//   </ul>
// </nav>
