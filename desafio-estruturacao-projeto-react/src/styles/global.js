import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #2F2E41;
    --blue: #009EDD;
    --subtitle: #999999;
    --darkGray: #333333;
    --shape: #FFFFFF;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
  }

  button {
    border: none;
  border-radius: 4px;
  background: var(--blue);
  color: #fff;
  
    cursor: pointer;
    text-transform: uppercase;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;