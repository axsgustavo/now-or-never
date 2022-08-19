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
      margin-bottom: 2rem;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }

      a {
        color: var(--white);
        font-size: 1.5rem;
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

  @media screen and (max-width: 720px) {
    width: 100%;
    height: 60px;
    padding: 0 40px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

    top: initial;
    bottom: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    > a {
      margin-right: 2rem;
      padding-right: 2rem;
      border-right: 1px solid rgba(255, 255, 255, 0.2);

      img {
        height: 2.5rem;
      }
    }

    ul {
      flex-direction: row;
      justify-content: flex-start;

      li {
        margin-bottom: 0;
        margin-right: 2.5rem;

        &:last-child {
          margin-right: 0;
        }

        a {
          font-size: 1.5rem;
        }

        span {
          left: 50%;
          top: -40px;
          transform: translate(-50%, 0);
        }
      }
    }
  }
`;