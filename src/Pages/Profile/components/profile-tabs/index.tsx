import { useState } from 'react';
import { routerConst } from '../../../../Utils/routerConst';
import styled from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import { Text } from '../../../../Components/ui-components/text';
import { useLogout } from '../../../../Hooks/useLogout';

const ProfileTabs = () => {
  const logout = useLogout();
  const location = useLocation();
  const currentLocation = location.pathname.split('/').reverse()[0];
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

  return (
    <>
      {menuLinks.map((e) => (
        <ProfileTabItem
          key={e.path}
          variant={currentLocation === e.path ? 'activeTab' : null}
        >
          <Text color={currentLocation === e.path ? 'primary' : 'textMain'}>
            {e.name}
          </Text>
          <Link to={e.path}></Link>
        </ProfileTabItem>
      ))}
      <ProfileTabItem onClick={logout}>
        <Text>Выйти</Text>
      </ProfileTabItem>
    </>
  );
};

export default ProfileTabs;

interface IProps {
  variant?: 'activeTab' | null;
}

const ProfileTabItem = styled.div<IProps>`
  width: auto;
  position: relative;
  border-bottom: 1px solid
    ${({ theme: { colors }, variant }) =>
      variant === 'activeTab' ? 'none' : colors.border};
  background: ${({ theme, variant }) =>
    variant === 'activeTab' ? 'rgba(213, 64, 104, 0.05)' : ''};
  padding: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    text-decoration: none;
    border: none;
  }

  @media screen and (max-width: 480px) {
  }
`;
