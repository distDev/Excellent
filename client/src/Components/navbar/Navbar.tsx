import { FC } from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../State/store';
import { PROFILE_ROUTE } from '../../Utils/routerConst';
import { Title } from '../uiComponents/title';
import {
  NavbarContainer,
  NavbarContent,
  NavbarIcon,
  NavbarPhone,
  NavbarTitle,
} from './styles/navbar';

type Props = {
  back?: boolean;
  variant?: string;
  justify?: string;
  title?: string;
};

const Navbar: FC<Props> = ({ back, variant, justify, title }) => {
  const phoneNumber = useAppSelector((state) => state.user?.phoneNumber);
  const location = useLocation();

  return (
    <NavbarContainer variant={variant}>
      {back && (
        <Link to={PROFILE_ROUTE}>
          <NavbarIcon>
            <IoChevronBackSharp />
          </NavbarIcon>
        </Link>
      )}
      <NavbarContent justify={justify}>
        <Title color='textMain' variant='normal'>
          {title}
        </Title>
        {phoneNumber !== null && location.pathname === '/profile' && (
          <Title color='textSecond' variant='extraSmall' as='h3'>
            {phoneNumber}
          </Title>
        )}
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
