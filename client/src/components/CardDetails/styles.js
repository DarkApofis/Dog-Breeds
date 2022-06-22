import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin: 0 auto;
    min-width: 375px;
    max-width: 750px;
    height: 100vh;
`

export const Button = styled.button`
    width: 80px;
    height: 30px;
    font-weight: 600;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    min-width: 325px;
    max-width: 750px;
    margin-top: 1rem;
    border-radius: 5px;
    box-shadow: 0px 0px 1.5px 0px hsl(0, 0%, 52%);
    overflow: hidden;
    @media (min-width: 710px){
        flex-direction: row;
        justify-content: space-between;
    }
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 330px;
    @media (min-width: 850px){
        width: 480px;
    }
    `

export const Image = styled.img`
    max-width: 100%;
    height: 100%;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 375px;
    padding: 1rem;
    height: 100%;
    @media (min-width: 750px){
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`

export const UL = styled.ul`
    list-style: none;
`

export const LI = styled.li`
    margin-bottom: 0.2rem;
`

export const Span = styled.span`
    font-weight: 600;
`