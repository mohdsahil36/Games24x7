import React from 'react';
import './Modal.scss';
import RegulationsModal from './Regulations/regulations';
import Breakdown from './BreakDown/breakdown';
import { X } from 'lucide-react';

export default function Modal({ closeModal }) {
  return (
    <div className="data-modal">
      <div className="headlineAndCancel">
        <h2 className="headline">GST? No worries!</h2>
        <div>
            <X onClick={closeModal} className='close-modal'/>
        </div>
      </div>
      <RegulationsModal />
      <Breakdown />
    </div>
  );
}
