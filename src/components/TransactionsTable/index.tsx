import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transcations {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  createdAt: Date;
  category: string;
}

export function TransactionsTable() {
  const [transcations, setTransactions] = useState<Transcations[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transcations.map(transcation => (
            <tr key={transcation.id}>
              <td>{transcation.title}</td>
              <td className={transcation.type}>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(
                  transcation.type === 'deposit'
                    ? transcation.amount
                    : transcation.amount * -1,
                )}
              </td>
              <td>{transcation.category}</td>
              <td>
                {new Intl.DateTimeFormat('en-US').format(
                  new Date(transcation.createdAt),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;
