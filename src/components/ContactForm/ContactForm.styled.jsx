import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  height: fit-content;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 15px;
  border-radius: 12px;
  border: 2px solid #000;
  font-size: 16px;
  color: #010101;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  font-weight: bold;
  font-size: 20px;
  justify-content: space-between;
  align-items: center;
`;
