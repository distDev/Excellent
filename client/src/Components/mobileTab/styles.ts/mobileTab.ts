import styled from 'styled-components/macro';

interface Props {
  variant?: string;
}

export const MobileTabContainer = styled.div`
  @media screen and (max-width: 479px) {
    padding: 20px 0px;
    width: 100%;
    border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.border}`};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;

    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
    }
  }
`;

export const MobileTabBody = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    gap: 15px;
  }
`;

export const MobileTabIcon = styled.div`
  @media screen and (max-width: 479px) {
    padding: 14px;
    background: ${({ theme: { background } }) => background.secondBg};
    color: ${({ theme: { colors } }) => colors.textMain};
    border-radius: 10px;
    display: flex;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      margin: auto;
    }
  }
`;

export const MobileTabContent = styled.div<Props>`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: ${({ variant }) => (variant === 'col' ? 'column' : '')};
    justify-content: space-between;
    align-items: ${({ variant }) => (variant === 'col' ? '' : 'center')};
  }
`;

export const MobileTabTitle = styled.h3`
  @media screen and (max-width: 479px) {
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: ${({ theme: { size } }) => size.normal};
    font-weight: 600;
  }
`;

export const MobileTabSubtitle = styled.p`
  @media screen and (max-width: 479px) {
    font-weight: 15px;
    color: ${({ theme: { colors } }) => colors.textSecond};
  }
`;
