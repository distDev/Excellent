import { FC } from 'react';
import { IoMdExit } from 'react-icons/io';
import MobileTab from '../../Components/mobileTab';
import { profileTabs } from './utils/data';
import Navbar from '../../Components/navbar/Navbar';
import { signOut } from 'firebase/auth';
import { authentication } from '../../Firebase/firebase-config';
import { useAppDispatch } from '../../State/store';
import { logoutUser } from '../../State/action-creators';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import ProfileContent from './components/profileContent';
import { ProfileContainer, ProfileMenu } from './styles/profile';
import ProfileTabs from './components/profileTabs';

type Props = {};

const Profile: FC = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const pcView = window.innerWidth > 900;
  const location = useLocation();

  const handleLogout = () => {
    signOut(authentication)
      .then(() => {
        dispatch(logoutUser());
        navigate('/services');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // мобильное меню
  const ProfileMobileTabs = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <ProfileContainer>
      {location.pathname !== '/profile' && (
        <ProfileContent>
          <Outlet />
        </ProfileContent>
      )}
      <ProfileMenu>
        {!pcView && <ProfileMobileTabs />}
        {pcView && <ProfileTabs />}
      </ProfileMenu>
    </ProfileContainer>
  );
};

export default Profile;
