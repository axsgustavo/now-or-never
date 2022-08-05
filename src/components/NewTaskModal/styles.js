import styled from "styled-components";

export const Container = styled.div`
  h2 {
    color: var(--title);
    font-size: 1.4rem;
    text-align: center;

    margin-bottom: 20px;
  }

  label {
    width: 100%;
    margin-bottom: 20px;
    position: relative;
    display: block;

    input {
      width: 100%;
      height: 50px;
      background-color: transparent;
      border: 2px solid var(--grey);
      border-radius: 50px;
      padding: 0 20px;

      color: var(--text);
      font-size: 0.9rem;

      &:focus ~ span, &:valid ~ span {
        background-color: var(--white);
        transform: translateY(-33px);
        font-size: 0.8rem;
        font-weight: 500;
      }
    }

    span {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translateY(-50%);
      
      color: var(--grey);
      padding: 0 5px;
      transition: 0.2s;
    }
  }

  div {
    width: 100%;
    margin-bottom: 20px;
    
    &:last-child {
      margin-bottom: 0;
    }

    span {
      width: 100%;
      display: block;
      margin-bottom: 8px;

      color: var(--title);
      font-weight: 500;
    }

    input {
      width: 20px;
      font-size: 2rem;
      color: var(--grey);
    }
  }

`;

export const ButtonStepControl = styled.button `
  background-color: ${({ backgrounColor }) => backgrounColor || "var(--main)"};
  border-radius: 50px;
  padding: 10px 20px;

  color: var(--white);
  font-weight: 500;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ButtonCreateNewTask = styled(ButtonStepControl)`
  position: absolute;
  right: 20px;
`;