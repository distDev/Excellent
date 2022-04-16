import React from 'react';
import { RiPhoneFill, RiUser3Line } from 'react-icons/ri';
import { MobileNavbar } from '../../Components/MobileNavbar/MobileNavbar';
import MobileTabItem from '../../Components/MobileTab/MobileTab';
import { Container } from '../../Components/StyledComponents/Container';

type Props = {};

const Settings = (props: Props) => {
  return (
    <Container>
      <MobileNavbar title='Настройки' back={true} margin='auto' />
      <MobileTabItem
        icon={<RiPhoneFill />}
        title='+7 (925) 380-25-73'
        alignItems='center'
      />
      <MobileTabItem
        icon={<RiUser3Line />}
        title='Дмитрий'
        alignItems='center'
      />
    </Container>
  );
};

export default Settings;
