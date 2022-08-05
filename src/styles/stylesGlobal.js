import styled, { createGlobalStyle } from 'styled-components';

export const color = {
  main: '#FF4D5D',
  title: '#404040',
  text: '#606060',
  grey: '#BFBFBF',
  white: '#FFFFFF',
  darkWhite: '#F3F3F3',
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Kantumruy Pro', sans-serif;

    outline: none;
  }

  :root {
    --main: ${color.main};
    --title: ${color.title};
    --text: ${color.text};
    --grey: ${color.grey};
    --white: ${color.white};
    --dark-white: ${color.darkWhite};
  }

  html {
    @media screen and (max-width: 1080px) {
        font-size: 93.75%;
    }

    @media screen and (max-width: 720px) {
        font-size: 87.5%;
    }
  }

  body {
    background-color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  button {
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  .react-modal {
    width: 400px;
    padding: 30px;
    position: relative;
    
    background-color: var(--white);
    border-radius: 10px;
  }

  .react-modal-overlayer {
    z-index: 999;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.65);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-button-close {
    position: absolute;
    top: 10px;
    right: 10px;
    
    transition: color 0.2s;
    font-size: 20px;

    &:hover {
      color: var(--main);
    }
  }
`;

export const Container = styled.div`
  /* Distanciamento do SideNavigation */
  margin-left: 80px;
  width: calc(100% - 80px);
  
  height: 100vh;
  overflow: hidden;
  padding: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;