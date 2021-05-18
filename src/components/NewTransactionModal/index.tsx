// import { Container } from "./styles";
import Modal from 'react-modal';

interface NewTransactionModalProps {
  isOpen: boolean;
  setIsNewTransactionModalOpen: (isOpen: boolean) => void;
}

export function NewTransactionModal({
  isOpen,
  setIsNewTransactionModalOpen,
}: NewTransactionModalProps) {
  function handleCloseNewTranscationModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={handleCloseNewTranscationModal}>
      <h2>Register new transaction</h2>
    </Modal>
  );
}

export default NewTransactionModal;
