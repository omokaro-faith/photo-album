import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({id, onClick, pageNumber}) => (
  <li
    id={id}
    onClick={onClick}
  >
  {pageNumber}
  </li>
)

Button.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
}



export default Button;
