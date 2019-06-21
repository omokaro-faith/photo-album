import React from 'react';
import { PropTypes } from 'prop-types';

const ErroDisplay = ({item}) => (
  <div className='alert'>
    <div>{`Cannot fetch ${item}, there might be an issue with your network connection`}</div>
  </div> 
)

ErroDisplay.propTypes = {
  item: PropTypes.string,
}


 export default ErroDisplay; 