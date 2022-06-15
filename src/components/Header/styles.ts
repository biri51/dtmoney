import styled from 'styled-components'

export const Container = styled.header`
background: var(--blue);
`;

export const Content = styled.div`
max-width: 1120px;
margin: 0 auto;//sempre centralizado

padding: 2rem 1rem 12rem; //1 rem = 16px; 1rem horizontal e 12rem pra baixo e 2rem pra cima 
display: flex;
align-items: center; //para deixar o botão e a logo no mesmo nivel
justify-content: space-between; //colocar espaço entre logo e botão

button {
    font-size: 1rem;
    color:#fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover { //separar para o mouse hover
        filter: brightness(0.9); //tem uma porrada de filtro legal 
    }

}

`