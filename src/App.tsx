import { useState } from "react";
import Modal from "react-modal";

import Dashboard from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTranscationModal() {
    setIsNewTransactionModalOpen(true);
  }

  return (
    <>
      <Header handleOpenNewTranscationModal={handleOpenNewTranscationModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        setIsNewTransactionModalOpen={setIsNewTransactionModalOpen}
      />
      <GlobalStyle />
    </>
  );
}
