import { RiMenu2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { StyledHeader } from '../StyledComponents/Header';

type Props = {};

const Header = (props: Props) => {
  return (
    <StyledHeader>
      <RiMenu2Fill />
      <Link className='header__logo' to='/'>
        EX
      </Link>
    </StyledHeader>
  );
};

export default Header;
