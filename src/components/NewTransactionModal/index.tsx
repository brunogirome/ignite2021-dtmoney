import { Container } from "./styles";
import Modal from "react-modal";

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
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseNewTranscationModal}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <h2>Register new transaction</h2>

        <input type="text" placeholder="Title" />
        <input type="number" placeholder="Value" />
        <input type="text" placeholder="category" />

        <button type="submit">Register</button>
      </Modal>
    </Container>
  );
}

export default NewTransactionModal;
