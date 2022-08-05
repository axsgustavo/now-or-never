import styled from "styled-components";

export const Container = styled.aside`
  background-color: var(--main);
  padding: 40px 0;

  width: 80px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    list-style: none;
    width: 100%;
    height: 100%;
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      margin-bottom: 25px;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        color: var(--white);
        transition: opacity 0.2s;

        &:hover ~ span {
          opacity: 1;
        }
      }

      span {
        position: absolute;
        left: 40px;
        top: 50%;
        transform: translateY(-50%);

        background-color: rgba(0, 0, 0, 0.9);
        border-radius: 5px;
        color: var(--white);
        font-size: 0.65rem;
        letter-spacing: 0.5px;
        transition: 0.3s;

        padding: 5px;
        width: fit-content;
        overflow: hidden;
        opacity: 0;
      }
    }
  }
`;