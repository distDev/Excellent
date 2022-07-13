import { BiBookAlt } from 'react-icons/bi';
import { RiHome5Line, RiSettingsLine } from 'react-icons/ri';
import { routerConst } from '../../../Utils/routerConst';

export const profileTabs = [
  {
    icon: <RiSettingsLine />,
    title: 'Настройки',
    subtitle: 'Имя, номер телефона',
    path: routerConst.PROFILE_SETTINGS_ROUTE,
    variant: 'col',
  },
  {
    icon: <BiBookAlt />,
    title: 'Записи',
    subtitle: 'История обслуживания',
    path: routerConst.PROFILE_SERVICELIST_ROUTE,
    variant: 'col',
  },
  {
    icon: <RiHome5Line />,
    title: 'Гараж',
    subtitle: 'Ваши автомобили',
    path: routerConst.PROFILE_GARAGE_ROUTE,
    variant: 'col',
  },
];
