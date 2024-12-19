import { useState } from 'react';
import './App.css';
import Modal from './components/GST-modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className="open-modal-btn"
        onClick={openModal}
        disabled={isModalOpen} // Disable the button when the modal is open
      >
        Open Modal
      </button>
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <Modal closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
