import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from './services/api';

interface Transcation {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  createdAt: Date;
  category: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transcation, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transcations: Transcation[];
  createTransaction: (transcations: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData,
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transcations, setTransactions] = useState<Transcation[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transcation: TransactionInput) {
    api.post('/transactions', transcation);
  }

  return (
    <TransactionsContext.Provider value={{ transcations, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
