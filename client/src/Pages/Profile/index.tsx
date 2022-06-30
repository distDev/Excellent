import { FC, useState } from 'react';
import { IoMdExit } from 'react-icons/io';
import { Container } from '../../Components/StyledComponents/Container';
import MobileTab from '../../Components/mobileTab';
import { profileTabs } from './utils/data';
import Navbar from '../../Components/navbar/Navbar';
import { signOut } from 'firebase/auth';
import { authentication } from '../../Firebase/firebase-config';
import { useAppDispatch } from '../../State/store';
import { logoutUser } from '../../State/action-creators';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Profile: FC = (props: Props) => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleLogout = () => {
    signOut(authentication)
      .then(() => {
        dispatch(logoutUser());
        navigate('/services');
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <Container>
      <Navbar variant='bottomLine' justify='start' />
      {profileTabs.map((e) => (
        <MobileTab
          key={e.title}
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
        onClick={handleLogout}
      />
    </Container>
  );
};

export default Profile;
