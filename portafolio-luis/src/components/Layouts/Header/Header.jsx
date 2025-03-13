import { NavLink } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><NavLink to="/">Inicio</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/studies">Studies</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="*">Links Rotos</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
