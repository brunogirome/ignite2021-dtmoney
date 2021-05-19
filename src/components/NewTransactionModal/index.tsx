import Modal from 'react-modal';

import imcomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  setIsNewTransactionModalOpen: (isOpen: boolean) => void;
}

export function NewTransactionModal({
  isOpen,
  setIsNewTransactionModalOpen,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

  function handleCloseNewTranscationModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseNewTranscationModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseNewTranscationModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container>
        <h2>Register new transaction</h2>

        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Value" />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
          >
            <img src={imcomeImg} alt="Income" />
            <span>Income</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Category" />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;
