import { createPortal } from 'react-dom';
import { FiMenu } from 'react-icons/fi';
import { pcView } from '../../../Utils/helperConst';
import { headerLinks } from './utils/headerLinks';
import ThemeSwitcher from '../themeSwitcher';
import styled from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import { RiUser3Line } from 'react-icons/ri';
import AccountMenu from '../../account-menu/index';
import { useState } from 'react';
import BurgerMenu from '../../burger-menu';
import { useAppSelector } from '../../../Hooks/useAppSelector';
import { useAppDispatch } from '../../../Hooks/useAppDispatch';
import { switchAuthModalView } from '../../../Store/slices/modal-slice';

const Header = () => {
  const location = useLocation();
  const isAuth = useAppSelector((state) => state.user?.phoneNumber);
  const dispatch = useAppDispatch();
  const [showAccMenu, setShowAccMenu] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  // header для мобильных
  if (!pcView) {
    return (
      <HeaderContainer>
        <FiMenu onClick={() => setShowBurgerMenu(true)} />
        <BurgerMenu show={showBurgerMenu} setShow={setShowBurgerMenu} />
        <HeaderLogo>EX</HeaderLogo>
      </HeaderContainer>
    );
  }
  // header для пк
  else {
    return createPortal(
      <HeaderContainer>
        <HeaderLogo>EX</HeaderLogo>
        <HeaderMenu>
          {headerLinks.map((e) => (
            <HeaderMenuItem
              key={e.name}
              active={e.path === location.pathname && true}
            >
              <Link key={e.name} to={e.path}>
                {e.name}
              </Link>
            </HeaderMenuItem>
          ))}
        </HeaderMenu>
        <HeaderOptions>
          <ThemeSwitcher />
          <RiUser3Line
            id='login-icon'
            onClick={() =>
              isAuth
                ? setShowAccMenu((prev) => !prev)
                : dispatch(switchAuthModalView())
            }
          />
          {showAccMenu && <AccountMenu setShowAccMenu={setShowAccMenu} />}
        </HeaderOptions>
      </HeaderContainer>,
      document.body
    );
  }
};

export default Header;

type THeaderMenuItem = {
  active?: boolean | null;
};

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  padding: 0px 40px;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme: { background } }) => background.body};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  z-index: 100;

  svg {
    width: 25px;
    height: 25px;
    color: ${({ theme: { colors } }) => colors.textMain};
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    position: relative;
    width: 100%;
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: flex-start;
    border: none;
    height: auto;
    z-index: 0;

    svg {
      width: 25px;
      height: 25px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
`;

const HeaderLogo = styled.h4`
  text-decoration: none;
  font-weight: 600;
  font-size: ${({ theme: { size } }) => size.title.medium};
  color: ${({ theme: { colors } }) => colors.textMain};

  @media screen and (max-width: 480px) {
    margin-left: 20px;
  }
`;

const HeaderMenu = styled.nav`
  display: flex;
  height: 100%;
`;

const HeaderMenuItem = styled.div<THeaderMenuItem>`
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: ${({ theme: { colors }, active }) =>
    active ? `1px solid ${colors.primary}` : 'none'};

  a {
    padding: 15px 20px;
    text-decoration: none;
    color: ${({ theme: { colors }, active }) =>
      active ? colors.primary : colors.textMain};
    font-weight: 500;
  }
`;

const HeaderOptions = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;
