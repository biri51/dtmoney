import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api';

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'> //omitindo id e createdAt

// interface TransactionInput { uma forma de colocar os atributos para a função createTransaction
//     title: string;
//     amount: number;
//     type: string;
//     category: string;
// }

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void> // devolve vazio pq não tem retorno nenhumn... como é uma função assincrona, retorna promise
}


interface TransactionsProviderProps {
    children: ReactNode; //aceita qualquer conteudo valido por react
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData //hackzim para parar de dar erro 
    );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions,setTransactions] = useState<Transaction[]>([]) //começa com array vazio pois o transactions é um array de infos. 

    useEffect(() => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    }, []); //sem nenhuma variavel nesse array significa que executa uma única vez

     

    async function createTransaction (transactionInput: TransactionInput) { //tornar assincrona para ser possivel pegar os dados 
    const response = await api.post('/transactions', { //
        ...transactionInput,
        createdAt: new Date(),
    })
    const { transaction } = response.data;

    setTransactions([ //por questão de imutabilidade tem que copiar todo o vetor e dps adicionar o novo dado
        ...transactions,
        transaction,
    ])
}


return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
        {children}
    </TransactionsContext.Provider>
);

}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context 
}