import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      {isOpen ? (
        <div className="modal">
          <div className="modal-content">
            <p>This is a modal dialog.</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
