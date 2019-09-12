import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="App">
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link to="/" className='nav-link'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="/create" className='nav-link'> Create </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;