import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    :root {
    --color-blue-light: #00d4ff;
    --color-blue-medium: #635bff;
    --color-blue-dark: #0a2540;
    --color-white: #fff;
    --color-gray-light: #d9d9d9;
    --color-gray-medium: #c1c5c9;
    --color-gray-dark: #425466;
  }

  body {
    font-family: "Barlow", Tahoma, sans-serif;
    background: var(--color-gray-medium);
    -webkit-font-smoothing: antialiased !important
  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`;