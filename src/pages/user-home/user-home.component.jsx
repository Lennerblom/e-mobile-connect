import React from 'react';
import { Link } from 'react-router-dom';

import './user-home.styles.scss';

const UserHome = () => (
  <div className='user-home-container'>
    <h1 className='user-home-title'>User Home</h1>
    <Link to='/view-user-status'>View Application Status</Link>
    <Link to='/new-application'>New Application</Link>
  </div>
);

export default UserHome;