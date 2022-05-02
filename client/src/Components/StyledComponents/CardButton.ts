import styled from 'styled-components';

export const CardButton = styled.button`
  width: 100%;
  margin-top: 15px;
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-size: ${({ theme: { size } }) => size.text.small};
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
`;
