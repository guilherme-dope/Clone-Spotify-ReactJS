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
    
    a {
      text-decoration: none;
      font-size: 16px;
      font-weight: 700;
      color: var(--gray-300);

      &:hover {
        color: var(--white)
      }
      
    }

    svg {
      height: 24px;
      width: 24px;
    }
    
    :root{
      
      --br: 8px;
      --pad: 20px;
      --gap: 10px;
      
      --gray-500: #1a1a1a;
      --gray-400: #242424;
      --gray-300: #a7a7a7;
      --gray: #121212;
     
      --black: #000000;
      --white: #ffffff;
    }
`
