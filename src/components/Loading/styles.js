import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: fit-content;

  div {
    border-radius: 50%;
    border: 15px solid transparent;
    border-top-color: var(--main);
    border-bottom-color: var(--main);

    animation: spin 0.6s ease infinite;
    -webkit-animation: spin 0.6s ease infinite;
  }
  
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;