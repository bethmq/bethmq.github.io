import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <ul className='main-nav'>
        <li><NavLink activeClassName='active' to='/home'>HOME</NavLink></li>
        <li><NavLink activeClassName='active' to='/information'>INFORMATION</NavLink></li>
        <li><NavLink activeClassName='active' to='/activity'>ACTIVITY</NavLink></li>
    </ul>
);

export default Nav;
