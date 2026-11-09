import React, { useContext } from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";
import { UserContext } from './UserProvider';

function NavBar({ onLinkclick }) {
    const { user } = useContext(UserContext);
    
    return (
        <>
            <nav className="navbar">
                <a href="/" className="logo">Pick<span>MyShow</span></a>

                <ul className="nav-links">
                    <li className="nav-username" style={{ color: '#fff', fontWeight: 'bold' }}>
                        {user?.username}
                    </li> 
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Movies">Movies</Link></li>
                    <li><Link to="/Cinemas">Cinemas</Link></li>
                    <li><Link to="/Offers">Offers</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>

                <div className="nav-buttons">
                    <Link to="/Signin" className="login-btn">Sign In</Link>
                    <Link to="/Signup" className="Signup-btn">Sign Up</Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
