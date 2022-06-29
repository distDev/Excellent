import { useState } from 'react';
import { RiUser3Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../../Utils/routerConst';
import { BottomNavContainer, BottomNavIcon } from './styles/bottomNav';
import { bottomNavLinks } from './utils/bottomNavLinks';
import Auth from '../../auth/index';
import ModalMedium from '../../modalMedium/index';
import { useAppSelector } from '../../../State/store';

type Props = {};

export const BottomNav = (props: Props) => {
  const [show, setShow] = useState(false);

  const user = useAppSelector((state) => state.user?.phoneNumber);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <BottomNavContainer>
      {bottomNavLinks.map(({ path, icon }) => (
        <NavLink
          key={path}
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to={path}
        >
          {icon}
        </NavLink>
      ))}
      {user ? (
        <NavLink
          className={({ isActive }) => (isActive ? 'active-link' : '')}
          to={PROFILE_ROUTE}
        >
          <RiUser3Line />
        </NavLink>
      ) : (
        <BottomNavIcon onClick={handleShow}>
          <RiUser3Line />
        </BottomNavIcon>
      )}
      <ModalMedium show={show} setShow={setShow}>
        <Auth setShow={setShow} />
      </ModalMedium>
    </BottomNavContainer>
  );
};
