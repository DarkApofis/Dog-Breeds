import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    height: 50px;
    box-shadow: 0px 0px 1.5px 0px hsl(0, 0%, 52%);
`

export const H1 = styled.h1`
    font-size: 1.4rem;
`

export const StyledLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    cursor: pointer;
    &.active {
        color: orange
    }
`