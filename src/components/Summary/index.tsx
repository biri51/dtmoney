import { access, accessSync } from 'fs';
import incomeImg from "../../assets/Entradas.svg"
import outcomeImg from "../../assets/Saidas.svg"
import totalImg from "../../assets/Total.svg"
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from "./styles";

export function Summary() { //header do primeiro div a parte superior do cabeçalho da caixinha
    const { transactions } = useTransactions(); //basta fazer isso para pegar as infos
    
    // const totalDeposits = transactions.reduce((acc, transaction) => { poderia ser criada as tres variaveis e calcular
    //     if (transaction.type === 'deposit') {
    //         return acc + transaction.amount;
    //     }

    //     return acc
    // }, 0)

    const summary = transactions.reduce((acc, transaction) => { //forma de calcular os valores
        if(transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
    } 
    else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
     }

    return acc;

    }, {
            deposits:0,
            withdraws: 0,
            total: 0,
    })

    return (
        <Container> 
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header> 
                    <strong> 
                          {new Intl.NumberFormat('pt-BR', { //para formatar de acordo com as normas brasileiras
                          style: 'currency',
                          currency: 'BRL'
                          }).format(summary.deposits)}
                    </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header> 
                    <strong> 
                        - {new Intl.NumberFormat('pt-BR', { //para formatar de acordo com as normas brasileiras
                          style: 'currency',
                          currency: 'BRL'
                          }).format(summary.withdraws)}
                    </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header> 
                    <strong>
                    {new Intl.NumberFormat('pt-BR', { //para formatar de acordo com as normas brasileiras
                          style: 'currency',
                          currency: 'BRL'
                          }).format(summary.total)}
                    </strong>
            </div>
        </Container>
    )} 
