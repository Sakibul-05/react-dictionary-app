import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import "../App.css";
import "./Navbar.css"
const Navbar = () => {
    const navigate = useNavigate();

  return (
    <div className='Navbar'>
        <nav className='nav'>
            <h1 className='navLeft' >Dictionary App</h1>
            <ul className='navRight'>
                <li>
                <Link to="/" className='link' >Home</Link>
                </li>
                <li>
                <Link to="/history" className='link'>History</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar;
