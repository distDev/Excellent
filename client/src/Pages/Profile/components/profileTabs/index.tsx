import React, { useState } from 'react';
import { routerConst } from '../../../../Utils/routerConst';
import { ProfileTabItem } from './styles/profileTabs';
import { Link, useLocation } from 'react-router-dom';
import { Text } from '../../../../Components/uiComponents/text';

type Props = {};

const ProfileTabs = (props: Props) => {
  const [menuLinks, setMenuLinks] = useState([
    {
      path: routerConst.PROFILE_SETTINGS_ROUTE,
      name: 'Профиль',
    },
    {
      path: routerConst.PROFILE_SERVICELIST_ROUTE,
      name: 'Записи',
    },
    {
      path: routerConst.PROFILE_GARAGE_ROUTE,
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
