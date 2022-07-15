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
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiUser3Line } from 'react-icons/ri';
import AccountMenu from '../../../Components/accountMenu/index';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [showAccMenu, setShowAccMenu] = useState(false);

  // header для мобильных
  if (!pcView) {
    return (
      <HeaderContainer>
        <FiMenu />
        <HeaderLogo>EX</HeaderLogo>
        <ThemeSwitcher />
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
            <HeaderMenuItem active={e.path === location.pathname && true}>
              <Link key={e.name} to={e.path}>
                {e.name}
              </Link>
            </HeaderMenuItem>
          ))}
        </HeaderMenu>
        <HeaderOptions>
          <ThemeSwitcher />
          <RiUser3Line onClick={() => setShowAccMenu((prev) => !prev)} />
          {showAccMenu && <AccountMenu setShowAccMenu={setShowAccMenu} />}
        </HeaderOptions>
      </HeaderContainer>,
      document.body
    );
  }
};

export default Header;
