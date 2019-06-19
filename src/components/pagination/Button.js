import React from 'react';
import { PropTypes } from 'prop-types';
import '../../styles/components/paginations/_button.css';

const Button = ({id, handleClick, pageNumber}) => (
  <div className='buttonwrapper__item'>
    <ul className='buttonwrapper__item--pagination'>
      <ol
        id={id}
        onClick={handleClick}
      >
      {pageNumber}
      </ol>
    </ul> 
  </div>
)

Button.propTypes = {
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
}



export default Button;
