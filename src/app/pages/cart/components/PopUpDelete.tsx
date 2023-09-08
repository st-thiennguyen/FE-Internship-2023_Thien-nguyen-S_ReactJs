import React from 'react';

type PopUpDeleteProps = {
  onCancel: () => void;
  onExcute: () => void;
};

const PopUpDelete = ({ onCancel, onExcute }: PopUpDeleteProps) => {
  return (
    <div className="cart-item-popup">
      <div className="">
        <h6 className="popup-title">Are you sure want to delete ?</h6>
        <p className="popup-subtitle">
          This will delete this item permanently. You can not undo this action.
        </p>
        <div className="popup-action d-flex justify-end">
          <button className="btn btn-rounded" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={onExcute}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpDelete;
