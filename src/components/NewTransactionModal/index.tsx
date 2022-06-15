import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import incomeImg from "../../assets/Entradas.svg"
import outcomeImg from "../../assets/Saidas.svg"
import closeImg from "../../assets/Vector.svg"
import { FormEvent, useState, useContext } from 'react'
import { useTransactions } from '../../hooks/useTransactions'


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;  
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) { //coloca-se o estado no arquivo mãe (app.tsx) pq lá ele tem acesso tbm ao cabeçalho
    const { createTransaction } = useTransactions();
    
    const [title,setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');



   async function handleCreateNewTransaction(event: FormEvent) { //esse event é o processo normal que o submit faz, então estamos somente dizendo o que é esse event
        event.preventDefault(); //para prevenir o padrão do submit que é recarregar tudo
  
       await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit') //isso aqui é para resetar o modal antes de entrar de novo
        onRequestClose();
       
    } 
   
   
    return(
        <Modal 
            isOpen={isOpen}  //para abrir o modal
            onRequestClose={onRequestClose} //para adicionar funcionamento de fechar o modal
            overlayClassName="react-modal-overlay" //esses dois dados são para conseguirmos estilizar o modal
            className="react-modal-content"
        >    
        <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
        >
        <img src={closeImg} alt="fechar modal"/></button>
        <Container onSubmit={handleCreateNewTransaction}>
            
            <h2>Cadastrar Transação</h2> 

            <input placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
            />
         
            <input 
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox
                    type="button"
                    onClick={() => {setType('deposit');}} //setado os types no index.tsx
                    isActive={type === 'deposit'}
                    activeColor='green'
                >
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>

                </RadioBox>
                
                <RadioBox
                    type="button"
                    onClick={() => {setType('withdraw');}} //setado os types no index.tsx 
                    isActive={type === 'withdraw'}
                    activeColor='red'
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>Saída</span>

                </RadioBox>
            </TransactionTypeContainer>

            <input 
            placeholder="Categoria" 
            value={category}
            onChange={event => setCategory(event.target.value)}
            
            />        

            <button type="submit">
                Cadastrar
            </button>

        </Container>
        </Modal>
    )
}