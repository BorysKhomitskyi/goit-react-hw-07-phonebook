import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background-color: #9fbfac;
  transform: scale(1);
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: ${props =>
      props.status === 'add'
        ? '#1FA847'
        : '#FF5A5A '};
  }
  &:active {
    transform: scale(1.2);
  }

  & > svg {
    margin-right: 8px;
  }
`;
