import React from 'react';
import { NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white'
}

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' exact style={link} activeStyle={{background: 'white', color: 'darkblue'}}>Home</NavLink>
      <NavLink to='/movies' exact style={link} activeStyle={{background: 'white', color: 'darkblue'}}>Movies</NavLink>
      <NavLink to='/directors' exact style={link} activeStyle={{background: 'white', color: 'darkblue'}}>Directors</NavLink>
      <NavLink to='/actors' exact style={link} activeStyle={{background: 'white', color: 'darkblue'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
