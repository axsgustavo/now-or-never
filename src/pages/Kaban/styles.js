import styled from "styled-components";

export const Container = styled.div`
  /* Distanciamento do SideNavigation */
  margin-left: 80px;
  width: calc(100% - 80px);
  
  height: 100vh;
  overflow: hidden;
  padding: 40px;

  display: grid;
  align-self: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
`;

export const Board = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  max-width: 300px;
  width: 100%;
  height: fit-content;
  padding: 20px;

  h3 {
    color: var(--main);
    font-size: 1rem;

    margin-bottom: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const Dropzone = styled.div`
  width: 100%;
  min-height: 50px;
`;