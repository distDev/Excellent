import React, { FC } from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { StyledMobileNavbar } from '../StyledComponents/StyledMobileNavbar';

type Props = {
  backpath?: string;
  back?: boolean;
  title: string;
};

export const MobileNavbar: FC<Props> = ({ backpath, back, title }) => {
  return (
    <StyledMobileNavbar>
      {/* Если это подстраница, то появляется стрелка, которая возвращает в профиль */}
      {back && backpath ? (
        <Link to={backpath}>
          <RiArrowLeftLine />
        </Link>
      ) : null}
      <h3>{title}</h3>
    </StyledMobileNavbar>
  );
};
