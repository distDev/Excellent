import React, { FC, useEffect, useRef } from 'react';
import { useAppSelector } from '../../State/store';
import { Text } from '../uiComponents/text';
import { accountMenuData } from '../../Utils/accountMenuData';
import {
  AccountMenuContainer,
  AccountMenuHeader,
  AccountMenuItem,
  AccountMenuLinks,
} from './styles/acoountMenu';
import { Link } from 'react-router-dom';

type Props = {
  setShowAccMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const AccountMenu: FC<Props> = ({ setShowAccMenu }) => {
  const phone = useAppSelector((state) => state.user.phoneNumber);
  const ref: any = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowAccMenu(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
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
          <AccountMenuItem key={e.name}>
            <Link to={e.path} />
            <Text>{e.name}</Text>
          </AccountMenuItem>
        ))}
        <AccountMenuItem>
          <Text>Выйти</Text>
        </AccountMenuItem>
      </AccountMenuLinks>
    </AccountMenuContainer>
  );
};

export default AccountMenu;
