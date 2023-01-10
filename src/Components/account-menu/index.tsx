import React, { FC, useEffect, useRef } from 'react';
import { useLogout } from '../../Hooks/useLogout';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { Text } from '../ui-components/text';
import { accountMenuData } from '../../Utils/accountMenuData';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

type Props = {
  setShowAccMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const AccountMenu: FC<Props> = ({ setShowAccMenu }) => {
  const phone = useAppSelector((state) => state.user.phoneNumber);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const logout = useLogout();

  const handleNavigate = (path: string) => {
    navigate(path);
    setShowAccMenu(false);
  };

  const handleLogout = () => {
    logout()
    setShowAccMenu(false)
  }

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowAccMenu(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, []);

  return (
    <AccountMenuContainer ref={ref}>
      <AccountMenuHeader>
        <Text variant='small'>Мой профиль</Text>
        <Text color='textSecond' variant='normal'>
          {phone}
        </Text>
      </AccountMenuHeader>
      <AccountMenuLinks>
        {accountMenuData.map((e) => (
          <AccountMenuItem key={e.name} onClick={() => handleNavigate(e.path)}>
            <Text>{e.name}</Text>
          </AccountMenuItem>
        ))}
        <AccountMenuItem onClick={handleLogout}>
          <Text>Выйти</Text>
        </AccountMenuItem>
      </AccountMenuLinks>
    </AccountMenuContainer>
  );
};

export default AccountMenu;

const AccountMenuContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 300px;
  padding: 20px 0px 0px 0px;
  border-radius: 10px;
  background: ${({ theme: { background } }) => background.white};
  box-shadow: 0px 6px 25px 9px rgba(0, 0, 0, 0.03);
`;

const AccountMenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px;
`;

const AccountMenuLinks = styled.div`
  margin-top: 10px;
`;

const AccountMenuItem = styled.div`
  position: relative;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(213, 64, 104, 0.05);
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    text-decoration: none;
    z-index: 10;
  }
`;

const AccounIcon = styled.div``;
