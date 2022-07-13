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
import { Link, NavLink, useLocation } from 'react-router-dom';

type Props = {};

const Header = (props: Props) => {
  const location = useLocation();

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
        <HeaderOptions></HeaderOptions>
      </HeaderContainer>,
      document.body
    );
  }
};

export default Header;
