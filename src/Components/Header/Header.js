import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Context/UserContext';
import './Header.css'

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">Shopping</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {
          user?.uid?
          <button className='btn-logout' onClick={logOut}>Log Out</button>
          :
          <>
          <Link to='/login'>Log in</Link>
          <Link to='/signup'>Sign up</Link>
          </>
        }
      </div>
    </nav>
  );
};

export default Header;