
import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./styles";




export function TransactionsTable() { //sempre que for um array ou um objeto a gente precisa informar o tipo, pq senao dá erro
    const { transactions } = useTransactions();

   
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (  //toda vez que se faz o map, tem que haver o primeiro elemento com uma key
                         <tr key={transaction.id}>
                         <td>{transaction.title}</td>
                         <td className={transaction.type}>
                             {new Intl.NumberFormat('pt-BR', { //para formatar de acordo com as normas brasileiras
                                 style: 'currency',
                                 currency: 'BRL'
                             }).format(transaction.amount)}
                             </td>
                         <td>{transaction.category}</td>
                         <td>{new Intl.DateTimeFormat('pt-BR').format(
                             new Date(transaction.createdAt)  //para formatar de acordo com as normas brasileiras
                            )}
                            </td>
                     </tr>
                    ))}

                </tbody>
            </table>
        </Container>
    )
}