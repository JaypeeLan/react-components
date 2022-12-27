import React from "react";
import "./modal.css";

const Modal = ({ toggleModal }) => {
  return (
    <>
      <div className="modalBg">
        <div className="modalContainer">
          <div className="modalClose">
            <button onClick={() => toggleModal(false)}>X</button>
          </div>
          <div className="modalTitle">Are You Sure?</div>
          <div className="modalContent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            officia tenetur amet nemo quod. Mollitia veniam nam aliquid non
            sapiente!
          </div>
          <div className="modalFooter">
            <button id="cancelBtn">cancel</button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
