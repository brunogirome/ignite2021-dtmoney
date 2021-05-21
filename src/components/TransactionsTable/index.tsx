import { useContext } from 'react';
import { Container } from './styles';
import { TransactionsContext } from '../../TransactionsContext';

export function TransactionsTable() {
  const transcations = useContext(TransactionsContext);

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
