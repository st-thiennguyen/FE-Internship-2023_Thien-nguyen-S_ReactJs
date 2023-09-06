import React, { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <div className={`modal ${isOpen ? 'modal-open' : 'modal-close'}`}>
      <div className="modal-overlay">
        <div className="modal-content">
          {children}
          <div className="modal-close" onClick={onClose}>
            <i className="icon icon-small icon-close"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
