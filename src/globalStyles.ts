import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F3F3F3;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: Roboto, serif;
    font-size: 1rem;
  }

  h1, h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
