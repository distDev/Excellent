import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  padding: 15px;
  gap: 20px;
  align-items: center;

  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const HeaderLogo = styled.h4`
  text-decoration: none;
  font-weight: 600;
  font-size: ${({ theme: { size } }) => size.title.medium};
  color: ${({ theme: { colors } }) => colors.textMain};
`;
