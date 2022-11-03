import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const Conteudo = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;

    input {
        width: 40rem;
        height: 0.5rem;
        padding: 1.1em 1.2em;
        font-size: 1em;
        font-weight: 500;
        border: 1px solid #666666;
        color: white;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }

    input:hover, button:hover{
        border: 1px solid #7c7c7c;
        color: #fff;
        background-color: #222222;
    }

    button {
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        background-color: #1a1a1a;
        color: #fff;
        border: 1px solid #666666;
        cursor: pointer;
        transition: border-color 0.25s;    
    }
    
    button:focus, button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }  
`

export const CardTodo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: none;
`