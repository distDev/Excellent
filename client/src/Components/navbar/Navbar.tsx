import { FC } from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../Utils/routerConst';
import {
  NavbarContainer,
  NavbarContent,
  NavbarIcon,
  NavbarPhone,
  NavbarTitle,
} from './styles/navbar';

type Props = {
  back?: boolean;
  title: string;
  phone?: string;
  variant?: string;
  justify?: string;
};

const Navbar: FC<Props> = ({ back, title, variant, justify, phone }) => {
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
        <NavbarTitle>{title}</NavbarTitle>
        <NavbarPhone>{phone}</NavbarPhone>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
