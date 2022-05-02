import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { StyledHeader } from '../StyledComponents/Header';

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <FiMenu />
      <Link className='header__logo' to='/'>
        EX
      </Link>
    </StyledHeader>
  );
};

export default Header;
