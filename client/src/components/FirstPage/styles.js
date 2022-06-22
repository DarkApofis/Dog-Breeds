import styled from "styled-components";
import { Link } from "react-router-dom";

export const DIV = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background: url("https://img5.goodfon.com/wallpaper/nbig/3/8c/food-look-granites-for-dogs.jpg");
    background-repeat: no-repeat;
    background-size: cover;
`

export const Home = styled(Link)`
    text-decoration: none;
    font-size: 2rem;
    font-weight: 800;
    color: black;
`