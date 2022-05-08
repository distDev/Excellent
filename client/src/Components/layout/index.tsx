import { FC } from 'react';
import PopupButton from '../popupButton/PopupButton';
import { Wrapper } from '../StyledComponents/Wrapper';
import { BottomNav } from './bottomNav/index';
import Header from './header/index';

type Props = {};

const Layout: FC = ({ children }) => {
  const cart = false;
  return (
    <Wrapper>
      <Header />
      {children}
      {cart && <PopupButton />}
      <BottomNav />
    </Wrapper>
  );
};

export default Layout;
