import styled from "styled-components";

export const BoxInput = styled.label`
  width: 100%;
  margin-bottom: 1.25rem;
  position: relative;
  display: block;

  input {
    width: 100%;
    height: 50px;
    border: 1px solid var(--grey);
    border-radius: 10px;
    padding: 0 1rem;

    color: var(--text);
    font-size: 0.9rem;

    &:focus ~ span, &:valid ~ span {
      background-color: var(--white);
      transform: translateY(-33px);
      font-size: 0.8rem;
    }
  }

  span {
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
    
    color: var(--grey);
    padding: 0 5px;
    transition: 0.2s;
  }
`;

export const BoxDate = styled.div`
  margin-bottom: 1.5rem;
  width: 100%;

  .react-daterange-picker {
    width: 100%;
    height: 50px;
    border: 1px solid var(--grey);
    border-radius: 10px;
    padding: 0 1rem;
  }

  .react-daterange-picker__wrapper {
    border: none;
    flex-grow: 0;

    color: var(--text);
  }

  .react-daterange-picker__button {
    position: absolute;
    right: 2.5rem;

    filter: grayscale(100%);
    
    &:last-child {
      right: 0.5rem;
    }

    &:hover {
      filter: grayscale(100%) brightness(0.9);
    }

    svg {
      stroke: var(--grey);
    }
  }

  .react-calendar {
    border: 1px solid var(--grey);
    border-radius: 10px;

    position: absolute;
    top: 0;
    left: -5px;
    transform: translateY(-50%);
  }
`;