import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { HeaderContainer, HeaderLogo } from './styles/header';

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <FiMenu />
      <HeaderLogo>EX</HeaderLogo>
    </HeaderContainer>
  );
};

export default Header;
