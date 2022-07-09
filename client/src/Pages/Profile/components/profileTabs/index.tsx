import React, { useState } from 'react';
import {
  PROFILE_GARAGE_ROUTE,
  PROFILE_SERVICELIST_ROUTE,
  PROFILE_SETTINGS_ROUTE,
} from '../../../../Utils/routerConst';
import { ProfileTabItem } from './styles/profileTabs';
import { Link, useLocation } from 'react-router-dom';
import { Text } from '../../../../Components/uiComponents/text';

type Props = {};

const ProfileTabs = (props: Props) => {
  const [menuLinks, setMenuLinks] = useState([
    {
      path: PROFILE_SETTINGS_ROUTE,
      name: 'Профиль',
    },
    {
      path: PROFILE_SERVICELIST_ROUTE,
      name: 'Записи',
    },
    {
      path: PROFILE_GARAGE_ROUTE,
      name: 'Гараж',
    },
  ]);
  const pcView = window.innerWidth > 900;
  const location = useLocation();
  const currentLocation = location.pathname.split('/').reverse()[0];

  return (
    <>
      {menuLinks.map((e) => (
        <ProfileTabItem
          variant={currentLocation === e.path ? 'activeTab' : null}
        >
          <Text color={currentLocation === e.path ? 'primary' : 'textMain'}>
            {e.name}
          </Text>
          <Link to={e.path}></Link>
        </ProfileTabItem>
      ))}
      <ProfileTabItem>
        <Text>Выйти</Text>
      </ProfileTabItem>
    </>
  );
};

export default ProfileTabs;
