import './Header.css'
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.jpeg'


export const Header = () => {
    return (
        <>
        <header className='header'>
            <div className='div-padre'>
                <img src={logo} alt="logo" className='logo-img'/>
                <h1>PORTAFOLIO</h1> 
            </div>
            <nav className='navbar'>
                <ul>
                    <li><NavLink to="/">INICIO</NavLink></li>
                    <li><NavLink to="/InterpersonalSkills">SOBRE MI</NavLink></li>
                    <li><NavLink to="/TechnicalSkills">HABILIDADES TÉCNICAS</NavLink></li>
                    <li><NavLink to="/Experience">EXPERIENCIA</NavLink></li>
                </ul>
            </nav>
        </header>
        </>
    )
}