import styled from 'styled-components';

type THeaderMenuItem = {
  active?: boolean | null;
};

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0px 40px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme: { background } }) => background.body};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};

  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media screen and (max-width: 479px) {
    position: relative;
    width: 100%;
    display: flex;
    padding: 15px;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;
    border: none;
    height: auto;

    svg {
      width: 25px;
      height: 25px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
`;

export const HeaderLogo = styled.h4`
  text-decoration: none;
  font-weight: 600;
  font-size: ${({ theme: { size } }) => size.title.medium};
  color: ${({ theme: { colors } }) => colors.textMain};
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const HeaderMenu = styled.nav`
  display: flex;
  height: 100%;
`;

export const HeaderMenuItem = styled.div<THeaderMenuItem>`
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: ${({ theme: { colors }, active }) =>
    active ? `1px solid ${colors.primary}` : 'none'};

  a {
    padding: 15px 20px;
    text-decoration: none;
    color: ${({ theme: { colors }, active }) =>
      active ? colors.primary : colors.textMain};
    font-weight: 500;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  gap: 20px;
`;
