import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  display: block;
  width: 100%;
  height: 50px;
  padding: 0 1rem;
  margin-bottom: 1rem;

  background-color: transparent;
  border: 1px solid var(--grey);
  border-radius: 10px;

  input[type="color"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
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

export const ViewColor = styled.div`
  background-color: ${props => props.backgroundColor || "var(--dark-white)"};
  border-radius: 50px;
  height: 50%;
  width: calc(100% - 2rem);

  position: absolute;
  top: 25%;
  left: 1rem;
`;