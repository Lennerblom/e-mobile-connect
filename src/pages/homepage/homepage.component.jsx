import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.styles.scss'

const HomePage = () => (
  <div className='homepage-container'>
    <h1 className='homepage-title'>
        XYZ Mobile
    </h1>
    <div className='route-container'>
      <Link to='/user-home' className='homepage-route'>
        <p>User</p>
      </Link>
      <Link to='admin-home' className='homepage-route'>
        <p>Admin</p>
      </Link>
    </div>
  </div>
);

export default HomePage;