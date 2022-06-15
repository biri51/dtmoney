import { Container } from "./styles"
import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTables"

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>

    ) 
}