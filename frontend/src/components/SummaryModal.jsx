import Modal from "react-modal";

// eslint-disable-next-line react/prop-types
const SummaryModal = ({ openModal, closeModal, children }) => {
  return (
    <div>
      <Modal isOpen={openModal} onRequestClose={closeModal}>
        {children}
      </Modal>
    </div>
  );
};

export default SummaryModal;
