import { FC } from 'react';
import { IoMdExit } from 'react-icons/io';
import { BiBookAlt } from 'react-icons/bi';
import { RiHome5Line, RiSettingsLine } from 'react-icons/ri';
import { MobileNavbar } from '../../Components/MobileNavbar/MobileNavbar';
import MobileTabItem from '../../Components/MobileTab/MobileTab';
import { Container } from '../../Components/StyledComponents/Container';
import {
  PROFILE_GARAGE_ROUTE,
  PROFILE_SERVICELIST_ROUTE,
  PROFILE_SETTINGS_ROUTE,
} from '../../Utils/routerConst';

type Props = {};

const Profile: FC = (props: Props) => {
  return (
    <Container>
      <MobileNavbar title='Дмитрий' phone='+7 925 412 21 44'/>
      <MobileTabItem
        icon={<RiSettingsLine />}
        title='Настройки'
        subtitle='Имя, номер телефона'
        path={PROFILE_SETTINGS_ROUTE}
        flexDirection='column'
        justifyContent='space-between'
      />
      <MobileTabItem
        icon={<BiBookAlt />}
        title='Записи'
        subtitle='История обслуживания'
        path={PROFILE_SERVICELIST_ROUTE}
        flexDirection='column'
        justifyContent='space-between'
      />
      <MobileTabItem
        icon={<RiHome5Line />}
        title='Гараж'
        subtitle='Ваши автомобили'
        path={PROFILE_GARAGE_ROUTE}
        flexDirection='column'
        justifyContent='space-between'
      />
      <MobileTabItem
        icon={<IoMdExit />}
        title='Выйти'
        subtitle='Выйти из профиля'
        flexDirection='column'
        justifyContent='space-between'
      />
    </Container>
  );
};

export default Profile;
