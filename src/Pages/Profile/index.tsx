import { FC } from 'react';
import { useLogout } from '../../Hooks/useLogout';
import { profileTabs } from './utils/data';
import { Outlet, useLocation } from 'react-router-dom';
import { IoMdExit } from 'react-icons/io';
import MobileTab from '../../Components/mobile-tab';
import Navbar from '../../Components/navbar/Navbar';
import ProfileContent from './components/profile-content';
import styled from 'styled-components/macro';
import ProfileTabs from './components/profile-tabs';

const Profile: FC = () => {
  const logout = useLogout();
  const pcView = window.innerWidth > 900;
  const location = useLocation();

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
          onClick={logout}
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

const ProfileContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 9fr 4fr;
  gap: 100px;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
  }
`;

const ProfileMenu = styled.div`
  width: auto;
  background: ${({ theme: { background } }) => background.mainBg};
  box-shadow: 0px 6px 37px 9px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  max-height: 243px;
  position: sticky;
  top: 80px;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    width: auto;
    background: none;
    box-shadow: none;
    border-radius: 0;
    max-height: 100%;
    height: auto;
    top: 0;
    position: relative;
  }
`;
