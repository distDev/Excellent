import { useState } from 'react';
import { RiUser3Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { routerConst } from '../../../Utils/routerConst';
import { BottomNavContainer, BottomNavIcon } from './styles/bottomNav';
import { bottomNavLinks } from './utils/bottomNavLinks';
import Auth from '../../auth/index';
import ModalMedium from '../../modalMedium/index';
import { useAppDispatch, useAppSelector } from '../../../State/store';
import { handleChangeAuthModal } from '../../../State/action-creators';

type Props = {};

export const BottomNav = (props: Props) => {
  const showAuthModal = useAppSelector((state) => state.modal.authModal.isOpen);
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user?.phoneNumber);

  const handleShow = () => {
    dispatch(handleChangeAuthModal());
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
          to={routerConst.PROFILE_ROUTE}
        >
          <RiUser3Line />
        </NavLink>
      ) : (
        <BottomNavIcon onClick={handleShow}>
          <RiUser3Line />
        </BottomNavIcon>
      )}
      
    </BottomNavContainer>
  );
};
