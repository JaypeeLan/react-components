import React, { useState } from "react";
import { createPortal } from "react-dom";

const ModalOne = ({ toggleModal }) => {
  if (toggleModal == false) return null;
  const [initMsg, setInitMsg] = useState(true);
  const [confirmMsg, setConfirmMsg] = useState(false);

  const showConfirm = () => {
    setInitMsg(false);
    setConfirmMsg(true);
  };

  return createPortal(
    <>
      <div className="modalBg">
        <div className="modalContainer">
          <div className="modalClose">
            <button onClick={() => toggleModal(false)}>X</button>
          </div>
          <div className="modalTitle">Are You Sure?</div>
          <div className="modalContent">
            {initMsg && (
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                officia tenetur amet nemo quod. Mollitia veniam nam aliquid non
                sapiente!
              </p>
            )}
            {confirmMsg && <p>Are you sure you want to continue?</p>}
          </div>
          <div className="modalFooter">
            <button onClick={() => toggleModal(false)} id="cancelBtn">
              cancel
            </button>
            <button onClick={showConfirm}>Continue</button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default ModalOne;
