import React from 'react';
import PropTypes from 'prop-types';
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName} onMouseDown={handleClose}>
      <section className='modal-main'>
        <div className=''>{children}</div>
      <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show:  PropTypes.bool.isRequired,
  children: PropTypes.array.isRequired,
}

export default Modal;