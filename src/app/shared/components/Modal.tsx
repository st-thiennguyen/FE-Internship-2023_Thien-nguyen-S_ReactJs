import React, { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div className="modal">
      <div className={`modal-overlay ${isOpen ? 'modal-open' : 'modal-close'}`}>
        <div className="modal-content">
          {children}
          <div className="modal-close-action" onClick={onClose}>
            <i className="icon icon-small icon-close"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;