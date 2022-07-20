import { createPortal } from 'react-dom';
import { FiMenu } from 'react-icons/fi';
import { pcView } from '../../../Utils/helperConst';
import { headerLinks } from './utils/headerLinks';
import ThemeSwitcher from '../themeSwitcher';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderMenu,
  HeaderMenuItem,
  HeaderOptions,
} from './styles/header';
import { Link, useLocation } from 'react-router-dom';
import { RiUser3Line } from 'react-icons/ri';
import AccountMenu from '../../../Components/accountMenu/index';
import { useState } from 'react';
import BurgerMenu from '../../burgerMenu';
import { useAppDispatch, useAppSelector } from '../../../State/store';
import { handleChangeAuthModal } from '../../../State/action-creators';

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
            onClick={() =>
              isAuth
                ? setShowAccMenu((prev) => !prev)
                : dispatch(handleChangeAuthModal())
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
