import { Summary } from "../Summary";
import { Container } from "./styles";
import { TransactionsTable } from '../TransactionsTable/index';

function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}

export default Dashboard;
