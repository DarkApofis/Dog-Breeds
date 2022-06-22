import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Anek Malayalam', sans-serif;
        height: 100vh;
        width: 100%;
    }
    .App{

        min-width: 375px;
        margin: 0 auto;
        overflow-y: scroll;
    }
    span{
        font-weight: 400
    }
`