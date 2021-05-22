import { useState } from 'react';
import { TransactionsProvider } from './hooks/useTransactions';
import Modal from 'react-modal';

import Dashboard from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  return (
    <TransactionsProvider>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        setIsNewTransactionModalOpen={setIsNewTransactionModalOpen}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
