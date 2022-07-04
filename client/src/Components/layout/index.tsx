import { FC } from 'react';
import { useAppSelector } from '../../State/store';
import PopupButton from '../popupButton/PopupButton';
import { Wrapper } from '../StyledComponents/Wrapper';
import { BottomNav } from './bottomNav/index';
import Header from './header/index';
import ThemeSwitcher from './themeSwitcher/index';

type Props = {};

const Layout: FC = ({ children }) => {
  const cartData = useAppSelector((state) => state.cart);

  return (
    <Wrapper>
      <ThemeSwitcher />
      <Header />
      {children}
      {cartData.length > 0 && <PopupButton />}
      <BottomNav />
    </Wrapper>
  );
};

export default Layout;
