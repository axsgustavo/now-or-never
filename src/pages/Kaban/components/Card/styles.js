import styled from "styled-components";

export const Container = styled.div`
  background-color: #F9F9F9;
  border-radius: 5px;
  padding: 10px;
`;

export const Status = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor || "var(--main)"};
  border-radius: 50px;
  margin-bottom: 5px;

  width: 30px;
  height: 5px;
`;