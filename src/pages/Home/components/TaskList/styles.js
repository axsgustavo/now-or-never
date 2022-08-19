import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 1.5rem;

  border-radius: 10px;
  background-color: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: transparent;
  
  thead, tbody {
    th, td {
      padding: 1rem;
      font-size: 1rem;
      text-align: left;

      &:last-child {
        width: 70px;
        text-align: center;
      }
    }

    th {
      padding-bottom: 10px;
      color: var(--text);
    }
  }
`;

export const TableRow = styled.tr`
  text-decoration: ${props => props.isActive ? "line-through" : "none"};

  &:nth-child(even) {
    background-color: #FAFAFA;
  }

  td {
      position: relative;
      color: var(--grey);

      a {
        transition: color 0.2s;
        color: var(--grey);
        text-decoration: none;

        &:hover {
          color: var(--text);
        }
      }
    }
`;

export const Checkbox = styled.label`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;

  display: block;
  width: 25px;
  height: 25px;
  border-radius: 8px;
  background-color: var(--dark-white);

  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;

    &:checked ~ span {
      opacity: 1;
    }
  }

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: var(--main);

    display: flex;
    align-items: center;
    justify-content: center;

    opacity: 0;
    transition: 0.2s;

    color: var(--white);
  }
`;

export const ViewColor = styled.div`
  background-color: ${props => props.backgroundColor};
  width: 2px;
  height: 100%;

  position: absolute;
  bottom: 0;
  left: 0;
`;