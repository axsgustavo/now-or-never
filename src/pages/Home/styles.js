import styled from 'styled-components';

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

  p {
    margin-bottom: 30px;
    width: 100%;
    max-width: 500px;
    
    color: var(--text);
    font-size: 1.4rem;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    margin-left: 0;
    
    height: calc(100vh - 40px);
    margin-bottom: 40px;
    
    padding: 20px;
  }
`;

export const BoxContent = styled.div`
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 30px 0;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;