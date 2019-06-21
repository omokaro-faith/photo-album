import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import '../../styles/components/header/_header.css';

const Header = ({ totalItems, pageName }) => (
  <Fragment>
    {
      totalItems >= 1 && 
      <div className='header__wrapper'>
        <h1 className='header__wrapper--item'>Viewing <span className='header__wrapper--span-item'>{totalItems}</span> {pageName} </h1>
        <h3 className='header__wrapper--item'>Click the navigation buttons to view more {pageName}</h3>
        <h3 className='header__wrapper--item'>Toggle dropdown to view more on the {pageName} page</h3>
     </div>
    }
  </Fragment>
)

Header.propTypes = {
  totalItems: PropTypes.number.isRequired,
  pageName: PropTypes.string.isRequired,
}



export default Header;
