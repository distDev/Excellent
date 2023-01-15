import { RiUser3Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { routerConst } from '../../../Utils/routerConst';
import styled from 'styled-components/macro';
import { bottomNavLinks } from './utils/bottomNavLinks';
import { useAppSelector } from '../../../Hooks/useAppSelector';
import { useAppDispatch } from '../../../Hooks/useAppDispatch';
import { switchAuthModalView } from '../../../Store/slices/modal-slice';

type Props = {};

export const BottomNav = (props: Props) => {
  const user = useAppSelector((state) => state.user?.phoneNumber);
  const dispatch = useAppDispatch();

  const handleShow = () => {
    dispatch(switchAuthModalView());
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

const BottomNavContainer = styled.header`
  width: 100%;
  max-width: 1140px;
  min-width: 320px;
  display: flex;
  justify-content: center;
  position: fixed;
  background: ${({ theme: { background } }) => background.white};
  border-top: 1px solid ${({ theme: { colors } }) => colors.border};
  bottom: 0;
  z-index: 100;

  svg {
    height: 25px;
    width: 25px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  a {
    outline: none;
    padding: 10px 0px;
    display: inline-block;
    width: 25%;
    text-align: center;
  }

  .active-link {
    svg {
      color: #d54068;
    }
  }

  @media (min-width: 320px) and (max-width: 390px) {
    svg {
      height: 20px;
      width: 20px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
`;

const BottomNavIcon = styled.div`
  padding: 10px 0px;
  display: inline-block;
  width: 25%;
  text-align: center;

  svg {
    height: 25px;
    width: 25px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media (min-width: 320px) and (max-width: 390px) {
    svg {
      height: 20px;
      width: 20px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
`;
