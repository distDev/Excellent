import { FC } from 'react';
import { useAppSelector } from '../../State/store';
import { Wrapper } from '../uiComponents/wrapper';
import { pcView } from '../../Utils/helperConst';
import { BottomNav } from './bottomNav/index';
import { ContentWrapper } from '../../Components/uiComponents/content-wrapper';
import PopupButton from '../popupButton/index';
import Header from './header/index';

const Layout: FC = ({ children }) => {
  const cartData = useAppSelector((state) => state.cart);

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      {cartData.length > 0 && <PopupButton />}
      {!pcView && <BottomNav />}
    </Wrapper>
  );
};

export default Layout;
