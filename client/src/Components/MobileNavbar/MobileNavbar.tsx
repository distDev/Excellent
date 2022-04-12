import React, { FC } from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../Utils/routerConst';
import { StyledMobileNavbar } from '../StyledComponents/StyledMobileNavbar';
import { Typography } from '../StyledComponents/Typography';

type Props = {
  back?: boolean;
  title: string;
};

export const MobileNavbar: FC<Props> = ({ back, title }) => {
  return (
    <StyledMobileNavbar>
      {/* Если есть back, то появляется стрелка, которая возвращает в профиль */}
      {back ? (
        <Link to={PROFILE_ROUTE}>
          <RiArrowLeftLine />
        </Link>
      ) : null}
      <Typography>{title}</Typography>
    </StyledMobileNavbar>
  );
};
