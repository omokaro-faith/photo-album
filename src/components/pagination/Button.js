import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({id, handleClick, pageNumber}) => (
  <li
    id={id}
    onClick={handleClick}
  >
    {pageNumber}
  </li>
)

Button.propTypes = {
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
}



export default Button;
