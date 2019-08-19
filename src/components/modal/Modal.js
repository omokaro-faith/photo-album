import React from 'react';
import PropTypes from 'prop-types';
import '../../styles//components/modal/_modal.css';
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        <div className='modal__children'>{children}</div>
      <button onClick={handleClose} className='modal__button'>close</button>
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