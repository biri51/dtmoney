import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5; 
        --red: #E52E4D;
        --blue: #5429CC;
        --green: #33CC95;
        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    } 
        //root variavel para salvar todas as infos que são globais e podem se repetir
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //16px é o tamanho da fonte padrão para destkop
    html {
        @media (max-width: 1080px) { //tela até 1080p, fazer isso
            font-size: 93.75% //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5% //14px
        }
    }
    
        
    body {
        background: var(--background) //importar a cor do root background
        /* -webkit-font-smoothing: antialiased - não aparece aqui // webkit engine do chrome, */
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif; //a primeira é a que baixa, a segunda é caso de problema no servidor do google
        font-weight: 400; 
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer; 
    }

    [disabled] {
        opacity:0.6;
        cursor:not-allowed 
    }

    .react-modal-overlay { //estilização global dos modais
        background: rgba(0, 0, 0, 0.5);

        position: fixed; //para ficar em cima da tela
        top: 0;
        right: 0; //esses 0 para ocupar a tela toda
        left: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }
    .react-modal-content {

        width: 100%;
        max-width: 576px; //se estiver acima de 576px, só irá abrir 576px
        background: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;
        
    }

`
   
