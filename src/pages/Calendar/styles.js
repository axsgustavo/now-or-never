import styled from "styled-components";

export const Container = styled.div`
  /* Distanciamento do SideNavigation */
  margin-left: 80px;
  width: calc(100% - 80px);

  height: 100vh;
  padding: 40px;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .calendar {
    width: 100%;
    height: 100%;
    padding-right: 1rem;
    margin-top: 2rem;

    ::-webkit-scrollbar {
      width: 6px;
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--grey);
      border-radius: 50px;
    }

    .calendar-header {
      border: none;
      border-radius: 10px;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
      margin-bottom: 2rem;
    }

    .prev, .next {
      height: 20px;
      padding: 0 1rem;
      border-radius: 50px;
      
      &.prev {
        border-radius: 50px 0 0 50px;
      }
      &.next {
        border-radius: 0 50px 50px 0;
      }
    }
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    margin-left: 0;

    height: calc(100vh - 40px);
    margin-bottom: 40px;

    padding: 20px;
  }
`;