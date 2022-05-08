import styled from 'styled-components';

export const AuthContainer = styled.div`
 height: 100%;

`;

export const AuthContent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 25px;
`;

export const AuthTitle = styled.h3`
  font-size: ${({ theme: { size } }) => size.title.normal};
  color: ${({ theme: { colors } }) => colors.textMain};
  font-weight: 600;
`;

