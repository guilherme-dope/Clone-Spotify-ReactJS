import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
      margin: 0;
      padding: 0;
      list-style: none;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }
    
    body {
      background: var(--black);
      color: var(--white);
      padding: 8px;
    }
    
    :root{
      
      --gray: #121212;
      --gray-300: #a7a7a7;
      --black: #000000;
      --white: #ffffff;
    }
`
