import styled from "styled-components"

export const Nav = styled.nav`
    margin-top: 1.2rem;
    width: 100%;
`

export const UL = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.8rem;
    list-style: none;
`
export const LI = styled.li`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
`

export const DIV = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    &.paint{
        background-color: orange;
    }
`
