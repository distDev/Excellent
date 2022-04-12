import React from 'react';
import { RiPhoneFill, RiUser3Line } from 'react-icons/ri';
import { MobileNavbar } from '../../Components/MobileNavbar/MobileNavbar';
import MobileTab from '../../Components/MobileTab/MobileTab';
import { StyledContainer } from '../../Components/StyledComponents/StyledContainer';

type Props = {};

const Settings = (props: Props) => {
  return (
    <StyledContainer>
      <MobileNavbar title='Настройки' back={true} />
      <MobileTab
        icon={<RiPhoneFill />}
        title='+7 (925) 380-25-73'
        jc='center'
      />
      <MobileTab icon={<RiUser3Line />} title='Дмитрий' jc='center' />
    </StyledContainer>
  );
};

export default Settings;
