import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 500px;
    width: 100%;
    padding: 20px 30px;
    border-radius: 50px;
    
    position: relative;
    
    color: var(--white);
    font-size: 1.2rem;
  
    background-color:  var(--main);

    span {
      position: absolute;
      right: 30px;
      top: 55%;
      transform: translateY(-50%);
    }
  }
`;