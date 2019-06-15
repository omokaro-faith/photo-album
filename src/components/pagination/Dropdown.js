import React from 'react';
import { PropTypes } from 'prop-types';

const Dropdown = ({handleChange}) => (
  <select onChange={handleChange}>
    <option>10</option>
    <option>20</option>
    <option>30</option>
    <option>50</option>
  </select>
)

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired,
}



export default Dropdown;
