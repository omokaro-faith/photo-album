import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/header/_logo.css';

const LogoPage = () => (
  <div className='logo__wrapper'>
    <Link to='/' className='logo__wrapper-item'> AlaBin </Link>
  </div>
)

 export default LogoPage; 