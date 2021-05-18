import Modal from "react-modal";

import closeImg from "../../assets/close.svg";

import { Container } from "./styles";

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
        <input type="text" placeholder="Category" />

        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;
