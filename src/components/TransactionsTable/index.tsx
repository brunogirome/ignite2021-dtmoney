import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transcations {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  value: number;
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
              <td className={transcation.type}>{transcation.value}</td>
              <td>{transcation.category}</td>
              <td>{transcation.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;
