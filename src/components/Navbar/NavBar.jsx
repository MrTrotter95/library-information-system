import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect} from "react";
import './NavBar.css';
import { useAuthContext } from "../../context/AuthContext";

const NavBar = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const { user, signOut } = useAuthContext()
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            if(user.isAdmin) {
                console.log('user is an Admin');
                setIsAdmin(true);
                console.log(isAdmin)
            } else {
                console.log('user is not an Admin');
                setIsAdmin(false);
            }
        } else {
            console.log('useEffect triggered. User not logged in.');
            setIsAdmin(false);
        }

    },[user]);


    const signOutHandler = () => {
        signOut()
        console.log('user logged out.');
        navigate('/Login')
    }

    //If user is logged in. Display this navigation bar
    if(user) {
        return (
            <header>
                <nav>
                    <h1 className='logo'>Library</h1>
                        <ul className='list p1'>
                            {isAdmin ?  <li className='list-item '><Link className='list-link red' to='/AdminDash'>AdminDash</Link></li>  : <li className='list-item '><Link className='list-link red' to='/Dashboard'>Dashboard</Link></li>}
                            {user &&    <li className='list-item '><Link className='list-link red' to='/Catalogue'>Catalogue</Link></li>}
                            {user &&    <li className='list-item '><Link className='list-link red' to='/Profile'>Profile</Link></li>}
                                        <li className='list-item'><a className='list-link red' onClick={signOutHandler}>Sign Out</a></li>
                        </ul>
                </nav>
            </header>
        )
    }
    // if user is not logged in. Display this navigation bar 
    else if(!user) {
        return (
            <header>
                <nav>
                    <h1 className='logo'>Library</h1>
                        <ul className='notLoggedIn p1'>
                            <li className='list-item '><Link className='list-link red' to='/Login'>Login</Link></li>
                            <li className='list-item notLoggedInLink'><Link className='list-link red' to='/SignUp'>Sign Up</Link></li>
                        </ul>
                </nav>
            </header>
        )
    }
    
}

export default NavBar;