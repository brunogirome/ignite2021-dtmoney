import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Tittle</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>New bookcase</td>
            <td className="withdraw">- $ 125,99</td>
            <td>Furniture</td>
            <td>15/05/2021</td>
          </tr>
          <tr>
            <td>Engery Taxes</td>
            <td className="withdraw">- $ 101,54</td>
            <td>Taxes</td>
            <td>03/05/2021</td>
          </tr>
          <tr>
            <td>BSA3 earnings</td>
            <td className="deposit">$ 654,99</td>
            <td>Stock earnings</td>
            <td>08/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;
