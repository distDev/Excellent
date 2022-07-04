import styled from 'styled-components/macro';

interface Props {
  variant?: 'bottomLine' | string;
  justify?: 'start' | string;
}

export const NavbarContainer = styled.div<Props>`
  @media screen and (max-width: 479px) {
    position: relative;
    display: flex;
    padding: 15px 0px;
    align-items: center;
    border-bottom: ${({ theme: { colors }, variant }) =>
      variant === 'bottomLine' ? `1px solid ${colors.border}` : ''};

    a {
      position: absolute;
      left: 0;
    }
  }
`;

export const NavbarContent = styled.div<Props>`
  @media screen and (max-width: 479px) {
    display: flex;
    width: 100%;
    justify-content: ${({ justify }) =>
      justify === 'start' ? 'flex-start' : 'center'};
    flex-direction: ${({ justify }) => (justify === 'start' ? 'column' : '')};
    gap: 10px;
    align-items: ${({ justify }) =>
      justify === 'start' ? 'flex-start' : 'center'};
  }
`;

export const NavbarTitle = styled.h3`
  @media screen and (max-width: 479px) {
    font-size: ${({ theme: { size } }) => size.title.normal};
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const NavbarPhone = styled.h3`
  @media screen and (max-width: 479px) {
    font-size: ${({ theme: { size } }) => size.title.small};
    color: ${({ theme: { colors } }) => colors.textSecond};
  }
`;

export const NavbarIcon = styled.div`
  @media screen and (max-width: 479px) {
    svg {
      height: 25px;
      width: 25px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
`;
