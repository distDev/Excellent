import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  padding: 15px;
  gap: 20px;
  align-items: center;

  .header__logo {
    text-decoration: none;
    font-weight: 600;
    font-size: 24px;
    color: #454545;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;
