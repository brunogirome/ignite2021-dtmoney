import { createContext, useState, useEffect, ReactNode } from 'react';
import { api } from './services/api';

interface Transcations {
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

export const TransactionsContext = createContext<Transcations[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transcations, setTransactions] = useState<Transcations[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transcations}>
      {children}
    </TransactionsContext.Provider>
  );
}
