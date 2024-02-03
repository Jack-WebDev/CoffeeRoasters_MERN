import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openFirstModal = () => {
    setIsFirstModalOpen(true);
  };

  const closeFirstModal = () => {
    setIsFirstModalOpen(false);
  };

  const openSecondModal = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const closeSecondModal = () => {
    setIsSecondModalOpen(false);
  };

  return (
    <div>
      <button onClick={openFirstModal}>Open First Modal</button>

      <Modal isOpen={isFirstModalOpen} onRequestClose={closeFirstModal}>
        <h2>First Modal</h2>
        <button onClick={closeFirstModal}>Close</button>
        <button onClick={openSecondModal}>Continue</button>
      </Modal>

      <Modal isOpen={isSecondModalOpen} onRequestClose={closeSecondModal}>
        <h2>Second Modal</h2>
        <p>Submission sent</p>
        <button onClick={closeSecondModal}>Close</button>
      </Modal>
    </div>
  );
};

export default App;
