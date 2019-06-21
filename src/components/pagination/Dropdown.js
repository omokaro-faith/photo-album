import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import '../../styles/components/paginations/_dropdown.css';

const Dropdown = ({ handleChange, itemsLength }) => (
  <Fragment>
    {
      itemsLength >= 1 && (
        <div className='dropdownwrapper__item'>
        <select onChange={handleChange} className='dropdownwrapper__item--select'>
          <option>20</option>
          <option>30</option>
          <option>50</option>
        </select>
      </div>
      )
    }
  </Fragment>
)

Dropdown.propTypes = {
  handleChange: PropTypes.func.isRequired,
}



export default Dropdown;
