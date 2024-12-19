import { useState } from 'react';
import './App.css';
import Modal from './components/GST-modal/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsExiting(false);
    }, 300);
  };

  return (
    <>
      <button className="open-modal-btn" onClick={openModal} disabled={isModalOpen}>
        Open Modal
      </button>
      {isModalOpen && (
        <div
          className={`modal-container ${isExiting ? 'fade-out' : ''}`}
          onClick={(e) => {
            if (e.target.classList.contains('modal-overlay')) {
              closeModal();
            }
          }}
        >
          <div className={`modal-overlay ${isExiting ? 'fade-out' : ''}`}></div>
          <div className={`modal-content ${isExiting ? 'fade-out' : ''}`}>
            <Modal closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
