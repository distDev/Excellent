import { FC } from 'react';
import PopupButton from '../popupButton/PopupButton';
import { Wrapper } from '../StyledComponents/Wrapper';
import { BottomNavigation } from './BottomNavigation/BottomNavigation';
import Header from './Header';

type Props = {};

const Layout: FC = ({ children }) => {
  const cart = false;
  return (
    <Wrapper>
      <Header />
      {children}
      {cart && <PopupButton />}
      <BottomNavigation />
    </Wrapper>
  );
};

export default Layout;
