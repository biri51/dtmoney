import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal"
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root'); //usado por questão de acessibilidade. esse Root é o root do html

export function App() {

  const [isNewTransactionModalOpen, setIsNewTrasactionModalOpen] = useState(false);//false no usestate pq o modal vem por padrão fechado.. Modal é a janela que abre quando clica o botão
    
    function handleOpenNewTransactionModal() { //handle como padrão para ações que o usuário irá clicar
        setIsNewTrasactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTrasactionModalOpen(false);
    }
    

  return ( //transactionscontext.provider sempre tem que ter um valor inicial. COMO está do lado de fora de tudo, pode ser consumido por toda a aplicação.
    <TransactionsProvider>  
         
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>  
      <Dashboard />
    <NewTransactionModal 
    isOpen={isNewTransactionModalOpen}
    onRequestClose={handleCloseNewTransactionModal}
    />
     
      <GlobalStyle />
    </TransactionsProvider>
  );
}



