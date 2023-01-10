import { FC } from 'react';
import { Wrapper } from '../ui-components/wrapper';
import { pcView } from '../../Utils/helperConst';
import { BottomNav } from './bottomNav/index';
import { ContentWrapper } from '../ui-components/content-wrapper';
import PopupButton from '../popup-button/index';
import Header from './header/index';
import Auth from '../auth';
import Footer from './footer';
import { useLocation } from 'react-router-dom';
import { routerConst } from '../../Utils/routerConst';
import { useAppSelector } from '../../Hooks/useAppSelector';

const Layout: FC = ({ children }) => {
  const cartData = useAppSelector((state) => state.cart);
  const { pathname } = useLocation();
  const footerCondition =
    pathname.slice(1) !== routerConst.CART_ORDER_ROUTE &&
    (pathname !== routerConst.CART_ROUTE || pcView) &&
    (pathname !== routerConst.PROFILE_ROUTE || pcView);
  const wrapperWidth = pathname === routerConst.ABOUT_ROUTE ? 'auto' : '1140px';
  const contentWidth = pathname === routerConst.ABOUT_ROUTE ? '0px' : null;

  return (
    <>
      <Wrapper width={wrapperWidth}>
        <Header />
        <ContentWrapper margin={contentWidth}>{children}</ContentWrapper>
        {cartData.length > 0 && <PopupButton />}
        {!pcView && <BottomNav />}
        <Auth />
      </Wrapper>
      {footerCondition && <Footer />}
    </>
  );
};

export default Layout;
