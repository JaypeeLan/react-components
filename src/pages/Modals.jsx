import React, { useState } from "react";
import Modal from "../components/modals/modal/Modal";
import ModalOne from "../components/modals/modalOne/ModalOne";

const Modals = () => {
  // this is to open the modal
  const [openModal, setOpenModal] = useState(false);
  // the setOpenModal is sent as prop to control the modal from another component
  // you can create this state where you want to control this modal from
  return (
    <>
      {/* <div>
        <h1>Modals</h1>
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
         Normal Modal 
        </button>

          {openModal && <Modal toggleModal={setOpenModal} />}
      </div> */}
      {/* --------------------------------------------- */}
      <div>
        <button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          modal with createPortal
        </button>
      </div>
      {openModal && <ModalOne toggleModal={setOpenModal} />}
    </>
  );
};

export default Modals;
