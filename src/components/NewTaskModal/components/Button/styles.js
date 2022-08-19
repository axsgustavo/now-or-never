import styled from "styled-components";

export const Container = styled.button`
  background-color: ${props => props.backgroundColor || "var(--main)"};
  border-radius: 50px;
  padding: 10px 20px;

  color: var(--white);
  font-weight: 500;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;