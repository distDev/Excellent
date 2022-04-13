import React, { FC } from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../Utils/routerConst';
import { Box } from '../StyledComponents/Box';
import { IconBox } from '../StyledComponents/IconBox';
import { Title } from '../StyledComponents/Title';

type Props = {
  back?: boolean;
  title: string;
  margin?: string;
};

export const MobileNavbar: FC<Props> = ({ back, title, margin }) => {
  return (
    <Box
      display='flex'
      padding='16px 0px'
      alignItems='center'
      borderBottom='1px solid #f2f2f2'
    >
      {/* Если есть back, то появляется стрелка, которая возвращает в профиль */}
      {back ? (
        <Link to={PROFILE_ROUTE}>
          <IconBox height='25px' width='25px'>
            <RiArrowLeftLine />
          </IconBox>
        </Link>
      ) : null}
      <Title margin={margin}>{title}</Title>
    </Box>
  );
};
