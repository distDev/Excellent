import { FC, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

import {
  MobileTabBody,
  MobileTabContainer,
  MobileTabContent,
  MobileTabIcon,
  MobileTabSubtitle,
  MobileTabTitle,
} from './styles.ts/mobileTab';

interface Props {
  title: string;
  subtitle?: string;
  icon: any;
  path?: string;
  variant?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MobileTab: FC<Props> = ({
  icon,
  title,
  subtitle,
  path,
  variant,
  onClick,
}) => {
  
  return (
    <MobileTabContainer onClick={onClick}>
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
