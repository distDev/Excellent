import { FC, useState } from 'react';
import { IoMdExit } from 'react-icons/io';
import { Container } from '../../Components/StyledComponents/Container';
import MobileTab from '../../Components/mobileTab';
import { profileTabs } from './utils/data';
import Navbar from '../../Components/navbar/Navbar';

type Props = {};

const Profile: FC = (props: Props) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Navbar
        title='Дмитрий'
        phone='+7 925 412 21 44'
        variant='bottomLine'
        justify='start'
      />
      {profileTabs.map((e) => (
        <MobileTab
          icon={e.icon}
          title={e.title}
          subtitle={e.subtitle}
          variant={e.variant}
          path={e.path}
        />
      ))}
      <MobileTab
        icon={<IoMdExit />}
        title='Выйти'
        subtitle='Выйти из профиля'
        variant='col'
      />
      {/* <Modal show={show} /> */}
    </Container>
  );
};

export default Profile;
