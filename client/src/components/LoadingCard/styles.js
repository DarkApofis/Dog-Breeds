import styled from "styled-components";

export const Section = styled.section`
    display: grid;
    grid-auto-rows: 400px;
    grid-template-columns: repeat(auto-fill, minmax(266px, 1fr));
    gap: 5rem;
`

export const Article = styled.article`
    border-radius: 5px;
    box-shadow: 0px 0px 1.5px 0px #0C0D0C;
    background-color: #737373;
    overflow: hidden;
    cursor: pointer;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 250px;
    background-color: #BFBFBF;
`


export const Div = styled.div`
    padding: 0.5rem 1.2rem;
`

export const H2 = styled.h2`
    margin-bottom: 0.5rem;
    width: 50px;
    height: 20px;
    background-color: #BFBFBF; 
`

export const P = styled.p`
    margin-bottom: 0.2rem;
    width: 150px;
    height: 20px;
    background-color: #BFBFBF; 
`
