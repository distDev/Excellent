import { routerConst } from './routerConst';

export const accountMenuData = [
  {
    name: 'Профиль',
    path: `/profile/` + routerConst.PROFILE_SETTINGS_ROUTE,
  },
  {
    name: 'Записи',
    path: `/profile/` + routerConst.PROFILE_SERVICELIST_ROUTE,
  },
  {
    name: 'Гараж',
    path: `/profile/` + routerConst.PROFILE_GARAGE_ROUTE,
  },
];
