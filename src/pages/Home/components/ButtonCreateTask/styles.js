import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 500px;
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 50px;
    
    position: relative;
    
    color: var(--white);
    font-size: 1.2rem;
  
    background-color:  var(--main);
    transition: filter 0.2s;

    span {
      position: absolute;
      right: 30px;
      top: 55%;
      transform: translateY(-50%);
    }

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const AddButton = styled.button`
  width: 35px;
  height: 35px;
  
  border-radius: 50px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color:  var(--main);
  color: var(--white);

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -2.5rem;
  right: 0;
  transform: translateY(-50%);
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  @media screen and (max-width: 720px) {
    top: initial;
    bottom: -80px;
  }
`;