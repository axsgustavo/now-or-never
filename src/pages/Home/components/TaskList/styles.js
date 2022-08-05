import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  height: 100%;

  padding: 25px;
  margin-top: 30px;

  border-radius: 50px;
  background-color: var(--white);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  table {
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
  
      tr:nth-child(even) {
        background-color: #FCFCFC;
      }
  
      th {
        padding-bottom: 10px;
        color: var(--text);
      }
  
      td {
        position: relative;
        color: var(--grey);
  
        &:first-child {
          border-radius: 10px 0 0 10px;
        }
        &:last-child {
          border-radius: 0 10px 10px 0;
        }
  
        a {
          transition: color 0.2s;
          color: var(--grey);
          text-decoration: none;
  
          &:hover {
            color: var(--text);
          }
        }
  
        label {
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
        }
      }
    }
  }
`;