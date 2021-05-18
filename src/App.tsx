import { useState } from "react";
import Modal from "react-modal";

import Dashboard from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTranscationModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTranscationModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header handleOpenNewTranscationModal={handleOpenNewTranscationModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTranscationModal}
      >
        <h2>Register new transaction</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
