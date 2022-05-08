import styled from 'styled-components/macro';

export const LoginContainer = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

export const LoginTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginBottom = styled.div`
  width: 100%;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { background } }) => background.button};
  color: ${({ theme: { colors } }) => colors.textSecond};
  font-weight: 600;
`;

export const LoginText = styled.p`
  font-size: ${({ theme: { size } }) => size.text.normal};
  color: ${({ theme: { colors } }) => colors.textMain};
  text-align: center;
 
  margin-top: 25px;
  span {
    color: ${({ theme: { colors } }) => colors.primary};
    padding-left: 5px;
  }
`;
