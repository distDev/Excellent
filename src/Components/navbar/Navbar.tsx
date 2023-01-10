import { FC } from 'react';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { routerConst } from '../../Utils/routerConst';
import { Title } from '../ui-components/title';
import styled from 'styled-components/macro';
import { useAppSelector } from '../../Hooks/useAppSelector';

type Props = {
  back?: boolean;
  variant?: string;
  justify?: string;
  title?: string;
  sticky?: boolean;
};

const Navbar: FC<Props> = ({ back, variant, justify, title, sticky }) => {
  const phoneNumber = useAppSelector((state) => state.user?.phoneNumber);
  const location = useLocation();

  return (
    <NavbarContainer variant={variant} sticky={sticky}>
      {back && (
        <Link to={routerConst.PROFILE_ROUTE}>
          <NavbarIcon>
            <IoChevronBackSharp />
          </NavbarIcon>
        </Link>
      )}
      <NavbarContent justify={justify}>
        <Title color='textMain' variant='normal'>
          {title}
        </Title>
        {phoneNumber !== null && location.pathname === '/profile' && (
          <Title color='textSecond' variant='extraSmall' as='h3'>
            {phoneNumber}
          </Title>
        )}
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;

interface INav {
  variant?: 'bottomLine' | string;
  justify?: 'start' | string;
  sticky?: boolean;
}

const NavbarContainer = styled.div<INav>`
  @media screen and (max-width: 480px) {
    position: ${({ sticky }) => (sticky === true ? 'sticky' : 'relative')};
    top: 0;
    z-index: ${({ sticky }) => (sticky === true ? '999' : '')};
    display: flex;
    padding: 15px 0px;
    align-items: center;
    border-bottom: ${({ theme: { colors }, variant }) =>
      variant === 'bottomLine' ? `1px solid ${colors.border}` : ''};
    background: ${({ theme: { background } }) => background.body};

    a {
      position: absolute;
      left: 0;
    }
  }
`;

const NavbarContent = styled.div<INav>`
  @media screen and (max-width: 480px) {
    display: flex;
    width: 100%;
    justify-content: ${({ justify }) =>
      justify === 'start' ? 'flex-start' : 'center'};
    flex-direction: ${({ justify }) => (justify === 'start' ? 'column' : '')};
    gap: 10px;
    align-items: ${({ justify }) =>
      justify === 'start' ? 'flex-start' : 'center'};
  }
`;

const NavbarIcon = styled.div`
  @media screen and (max-width: 480px) {
    svg {
      height: 25px;
      width: 25px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
`;
