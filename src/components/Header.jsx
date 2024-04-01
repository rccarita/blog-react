import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    return (
        <nav>
            <div className="container nav__container">
                <Link to='/' className='nav__logo'>
                    <img src={Logo} alt="Navbar_logo" />
                </Link>
                <ul className="nav__menu">
                    <li><Link to='/profile'></Link>Rue Ccarita</li>
                    <li><Link to='/create'></Link>Create Post</li>
                    <li><Link to='/authors'></Link>Authors</li>
                    <li><Link to='/logout'></Link>Logout</li>
                </ul>
                <button className="nav__toggle-btn">
                    <AiOutlineClose />
                </button>
            </div>
        </nav>
    )
}

export default Header