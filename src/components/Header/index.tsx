
import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles'

interface HeaderProps { //Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface 
                        // must follow the structure provided by their interface. The TypeScript compiler does not convert interface to JavaScript.
    onOpenNewTransactionModal: () => void;   //para começar em branco o opentransactionmodal
}
 
export function Header( {onOpenNewTransactionModal} : HeaderProps) { //colocamos argumentos no header para que seja possível ler no app.tsx o que vem do header.tsx. Reparar que onClick = o argumento
    
    return (
       <Container>
           <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova Transação
            </button>

           
          </Content>
       </Container>
    )
} 
