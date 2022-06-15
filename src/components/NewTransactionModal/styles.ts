import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
        color: var(--text-body)
    }

    & + input { //todo input que tiver um input antes dele
        margin-top: 1rem;
    }
}
button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.9)
    }

}

`

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem; //espaçamento entre os botões

 

`


interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors ={
    green: '#33CC95',
    red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>` //esse <> radioboxprops é para conseguir fazer com que o botão funcione com as props desejadas, tornando isActive um parametro válido

        height: 4rem;
        border: 1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props) => props.isActive
         ? transparentize(0.9, colors[props.activeColor]) 
         : 'transparent'}; // vai verificar o props, se true muda eee, se false transparent

        display: flex;
        align-items: center;
        justify-content: center;

        transition: border-color 0.2s;

        &:hover {
            border-color: ${darken(0.1, '#d7d7d7')} //yarn add polished. Essa função escurece em 10% a cor d7d7d7

        }

        img {
            height: 20px;
            width: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);

        }

`