import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    box-shadow: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  html {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-rendering: optimizeLegibility; 

        @media (max-width: 768px) {
        font-size: 50%;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        }
    }

    body {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
      overflow: hidden;
      text-rendering: optimizeLegibility;
    }

    body #root .App {
      overflow-y: auto;
      height: 100vh;
      padding: 5rem 0;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      
      
      
    }

    pre{
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      
      text-align: left;

      background-color: black;
      color: white;
    }

`;
