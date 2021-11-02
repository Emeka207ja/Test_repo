import React from 'react'
import { NavLink} from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <div>
            <ul className='navBar bg-info'>
                <li><NavLink to='/' className='text-white'>Home</NavLink></li>
                <li><NavLink to='/About' className='text-white'>About</NavLink></li>
                <li><NavLink to='/Register' className='text-white'>Register</NavLink></li>
                <li><NavLink to='/Contact' className='text-white'>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Nav
