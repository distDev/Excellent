import { BiBookAlt } from 'react-icons/bi';
import { RiHome5Line, RiSettingsLine } from 'react-icons/ri';
import { PROFILE_GARAGE_ROUTE, PROFILE_SERVICELIST_ROUTE, PROFILE_SETTINGS_ROUTE } from '../../../Utils/routerConst';

export const profileTabs = [
  {
    icon: <RiSettingsLine />,
    title: 'Настройки',
    subtitle: 'Имя, номер телефона',
    path: PROFILE_SETTINGS_ROUTE,
    variant: 'col',
  },
  {
    icon: <BiBookAlt />,
    title: 'Записи',
    subtitle: 'История обслуживания',
    path: PROFILE_SERVICELIST_ROUTE,
    variant: 'col',
  },
  {
    icon: <RiHome5Line />,
    title: 'Гараж',
    subtitle: 'Ваши автомобили',
    path: PROFILE_GARAGE_ROUTE,
    variant: 'col',
  },
];
