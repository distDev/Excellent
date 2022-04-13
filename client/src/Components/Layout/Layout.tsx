import { FC } from 'react';
import { Wrapper } from '../StyledComponents/Wrapper';
import { BottomNavigation } from './BottomNavigation/BottomNavigation';
import Header from './Header';

type Props = {};

const Layout: FC = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <BottomNavigation />
    </Wrapper>
  );
};

export default Layout;
