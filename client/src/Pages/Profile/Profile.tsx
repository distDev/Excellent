import { FC, useState } from 'react';
import { IoMdExit } from 'react-icons/io';
import { BiBookAlt } from 'react-icons/bi';
import { RiHome5Line, RiSettingsLine } from 'react-icons/ri';
import { MobileNavbar } from '../../Components/navbar';
import MobileTabItem from '../../Components/tabs';
import { Container } from '../../Components/StyledComponents/Container';
import {
  PROFILE_GARAGE_ROUTE,
  PROFILE_SERVICELIST_ROUTE,
  PROFILE_SETTINGS_ROUTE,
} from '../../Utils/routerConst';
import Modal from '../../Components/modal';

type Props = {};

const Profile: FC = (props: Props) => {

  const [show, setShow] = useState(false)

  return (
    <Container>
      <MobileNavbar title='Дмитрий' phone='+7 925 412 21 44' />
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
      {/* <Modal show={show} /> */}
    </Container>
  );
};

export default Profile;
