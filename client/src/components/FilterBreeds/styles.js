import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    @media (min-width: 650px){
        flex-direction: row;
        justify-content: space-between;
    }
`

export const Input = styled.input`
    padding: 0.5rem;
    max-width: 300px;
    height: 30px;
    margin-bottom: 1rem;
    border: 1px solid black;
    border-radius: 5px;
`
export const Select = styled.select`
    margin-bottom: 1rem;
    padding: 0 0.5rem;
    max-width: 220px;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    @media (min-width: 650px){
        margin-left: 1rem;
    }
`