import { FC, ReactElement } from 'react';
import { IconType } from 'react-icons/lib';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

interface Props {
  title: string;
  subtitle?: string;
  icon: ReactElement<IconType>;
  path?: string;
  variant?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  dataСy?: string;
}

const MobileTab: FC<Props> = ({
  icon,
  title,
  subtitle,
  path,
  variant,
  onClick,
  dataСy,
}) => {
  return (
    <MobileTabContainer onClick={onClick} data-cy={dataСy}>
      <MobileTabBody>
        <MobileTabIcon>{icon}</MobileTabIcon>
        <MobileTabContent variant={variant}>
          <MobileTabTitle>{title}</MobileTabTitle>
          <MobileTabSubtitle color='grey'>{subtitle}</MobileTabSubtitle>
        </MobileTabContent>
      </MobileTabBody>
      {path && (
        <>
          <RiArrowRightSLine />
          <Link to={path}></Link>
        </>
      )}
    </MobileTabContainer>
  );
};

export default MobileTab;

interface ITab {
  variant?: string;
}

const MobileTabContainer = styled.div`
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

  @media screen and (max-width: 480px) {
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

  @media (min-width: 320px) and (max-width: 380px) {
    padding: 10px 0px;
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

const MobileTabBody = styled.div`
  display: flex;
  
`;

const MobileTabIcon = styled.div`
  padding: 14px;
  background: ${({ theme: { background } }) => background.secondBg};
  color: ${({ theme: { colors } }) => colors.textMain};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-right: 15px;

  svg {
    width: 20px;
    height: 20px;
    margin: auto;
  }

  @media screen and (max-width: 480px) {
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

  @media (min-width: 320px) and (max-width: 380px) {
    padding: 10px 15px;
    background: ${({ theme: { background } }) => background.secondBg};
    color: ${({ theme: { colors } }) => colors.textMain};
    border-radius: 8px;
    display: flex;
    justify-content: center;

    svg {
      width: 15px;
      height: 15px;
      margin: auto;
    }
  }
`;

const MobileTabContent = styled.div<ITab>`
  display: flex;
  flex-direction: ${({ variant }) => (variant === 'col' ? 'column' : '')};
  justify-content: space-between;
  align-items: ${({ variant }) => (variant === 'col' ? '' : 'center')};

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: ${({ variant }) => (variant === 'col' ? 'column' : '')};
    justify-content: space-between;
    align-items: ${({ variant }) => (variant === 'col' ? '' : 'center')};
  }
`;

const MobileTabTitle = styled.h3`
  color: ${({ theme: { colors } }) => colors.textMain};
  font-size: ${({ theme: { size } }) => size.normal};
  font-weight: 600;

  @media screen and (max-width: 480px) {
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: ${({ theme: { size } }) => size.normal};
    font-weight: 600;
  }

  @media (min-width: 320px) and (max-width: 380px) {
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: ${({ theme: { size } }) => size.title.small};
    font-weight: 500;
    margin-bottom: 7px;
  }
`;

const MobileTabSubtitle = styled.p`
  font-weight: 15px;
  color: ${({ theme: { colors } }) => colors.textSecond};

  @media screen and (max-width: 480px) {
    font-weight: 15px;
    color: ${({ theme: { colors } }) => colors.textSecond};
  }
`;
