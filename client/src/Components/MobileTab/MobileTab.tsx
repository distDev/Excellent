import React, { FC } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Paragraph } from '../StyledComponents/Paragraph';
import {
  StyledMobileTab,
  StyledMobileTabContent,
  StyledMobileTabIcon,
  StyledMobileTabText,
  Styles,
} from '../StyledComponents/StyledMobileTab';
import { Typography } from '../StyledComponents/Typography';

type Props = {
  title: string;
  subtitle?: string;
  icon: any;
  path?: string;
};

const MobileTab: FC<Props & Styles> = ({
  icon,
  title,
  subtitle,
  path,
  fd,
  jc,
}) => {
  return (
    <StyledMobileTab>
      <StyledMobileTabContent>
        <StyledMobileTabIcon>{icon}</StyledMobileTabIcon>
        <StyledMobileTabText fd={fd} jc={jc}>
          <Typography>{title}</Typography>
          <Paragraph>{subtitle}</Paragraph>
        </StyledMobileTabText>
      </StyledMobileTabContent>
      {/* Если есть ссылка, то рендерится стрелка и ссылка */}
      {path ? (
        <>
          <RiArrowRightSLine />
          <Link to={path}></Link>
        </>
      ) : null}
    </StyledMobileTab>
  );
};

export default MobileTab;
