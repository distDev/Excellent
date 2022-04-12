import { FC } from 'react';
import { StyledWrapper } from '../StyledComponents/StyledWrapper';
import { BottomNavigation } from './BottomNavigation/BottomNavigation';
import Header from './Header';

type Props = {};

const Layout: FC = ({ children }) => {
  return (
    <StyledWrapper>
      <Header />
      {children}
      <BottomNavigation />
    </StyledWrapper>
  );
};

export default Layout;
