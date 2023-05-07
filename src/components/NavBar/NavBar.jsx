import React from 'react'
import '../../css/navBar.css'
import { Link } from 'react-router-dom'
import { UseApiContext } from '../../context/ApiContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'


const NavBar = () => {

    const {mode,setMode} = UseApiContext()

return (
    <div className='divNavBarContainer'>
    {
        mode === false ? 
    <div className='navBarContainer'>
        <ul className='ulNavBar'>
            <Link to={'/'}><button><li>Home</li></button></Link>
            <Link to={'products'}><button><li>Products</li></button></Link>
            <Link to={'/detail'}><button><li>Products Detail</li></button></Link>
            <Link to={'/about-us'}><button><li>About DeTodo</li></button></Link>
            <button onClick={() => setMode(true)}><li><FontAwesomeIcon icon={faMoon}/></li></button>
        </ul>
    </div>
    :
    <div className='navBarContainerDark'>
        <ul className='ulNavBar'>
            <Link to={'/'}><button><li>Home</li></button></Link>
            <Link to={'products'}><button><li>Products</li></button></Link>
            <Link to={'/detail'}><button><li>Products Detail</li></button></Link>
            <Link to={'/about-us'}><button><li>About DeTodo</li></button></Link>
            <button onClick={() => setMode(false)}><li><FontAwesomeIcon icon={faSun}/></li></button>
        </ul>
    </div>
    }
    </div>
)
}

export default NavBar

