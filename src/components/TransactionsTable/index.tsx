import { useTranscations } from '../../hooks/useTransactions';

import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useTranscations();

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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(
                  transaction.type === 'deposit'
                    ? transaction.amount
                    : transaction.amount * -1,
                )}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('en-US').format(
                  new Date(transaction.createdAt),
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
