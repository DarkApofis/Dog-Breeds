import styled from "styled-components"

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 0 auto;
    margin-top: 1rem;
    width: 325px;
    border: 1px solid black;
    border-radius: 5px;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
`

export const Input = styled.input`
    padding: 0.7rem;
    margin-top: 0.5rem;
    width: 250px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    &.error{
        border-color: red;
        outline-color: red;
    }
    &.correct{
        border-color: green;
        outline-color: green;
    }
`

export const P = styled.p`
    display: none;
    &.error{
        display: block;
        margin-top: 0.5rem;
        color: red;
        font-size: 0.9rem;
    }
`


export const Select = styled.select`
    padding-left: 0.7rem;
    margin-top: 0.5rem;
    width: 250px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
`

export const DIV = styled.div`
    width: 250px;
`

export const H2 = styled.h2`
    margin-bottom: 1rem;
    font-size: 1.2rem;
`

export const Button = styled.button`
    align-self: center;
    width: 100px;
    height: 50px;
    font-size: 0.8rem;
    color: #000000;
    background-color: #FF723C;
    border: 1px solid #FF723C;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        border: 1px solid #FFBA2E;
        color: #000000;
        background-color: #FFBA2E; 
    }
`




