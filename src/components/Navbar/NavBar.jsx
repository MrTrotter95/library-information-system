import { Link } from 'react-router-dom';
import React from "react";
import './NavBar.css';

const NavBar = () => {
    return (
        <header>
            <nav>
                <h1 className='logo'>Library</h1>
                <ul className='list p1'>
                    <li className='list-item '><Link className='list-link red' to='/Dashboard'>Dashboard</Link></li>
                    <li className='list-item '><Link className='list-link red' to='/Catalogue'>Catalogue</Link></li>
                    <li className='list-item '><Link className='list-link red' to='/Profile'>Profile</Link></li>
                    <li className='list-item '><Link className='list-link red' to='/Login'>Login</Link></li>
                </ul>
            </nav>
            <ul className='list p1'>
                <li className='list-item '><Link className='list-link red' to='/AddBook'>Create Book</Link></li>
                <li className='list-item '><Link className='list-link red' to='/EditBook'>Edit Book</Link></li>
                <li className='list-item '><Link className='list-link red' to='/SignUp'>Sign Up</Link></li>
                <li className='list-item '><Link className='list-link red' to='/AdminDash'>AdminDash</Link></li>
            </ul>
        </header>
    )
}

export default NavBar;