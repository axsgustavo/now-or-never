import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }

  input {
    width: 20px;
    height: 50px;
    padding: 0 1rem;

    font-size: 1.5rem;
    color: var(--grey);

    border: 1px solid var(--grey);
    border-radius: 10px;
  }

  span {
    display: block;
    padding: 0 5px;

    background-color: var(--white);
    color: var(--grey);
    font-size: 0.8rem;

    position: absolute;
    left: 1rem;
    top: 0;
    transform: translateY(-50%);
  }
`;