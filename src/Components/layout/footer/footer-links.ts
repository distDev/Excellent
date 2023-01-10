import { pcView } from '../../../Utils/helperConst';
import { routerConst } from '../../../Utils/routerConst';

export const footerLinks = [
  {
    name: 'Главная',
    path: routerConst.MAIN_ROUTE,
  },
  {
    name: 'Услуги',
    path: routerConst.SERVICES_ROUTE,
  },
  {
    name: 'Корзина',
    path: routerConst.CART_ROUTE,
  },
  {
    name: 'О нас',
    path: routerConst.ABOUT_ROUTE,
  },
  {
    name: 'Личный кабинет',
    path: pcView
      ? `/profile/` + routerConst.PROFILE_SETTINGS_ROUTE
      : routerConst.PROFILE_ROUTE,
  },
];
