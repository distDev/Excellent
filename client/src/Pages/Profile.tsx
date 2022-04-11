import { FC } from 'react';
import { MobileNavbar } from '../Components/MobileNavbar/MobileNavbar';
import { StyledContainer } from '../Components/StyledComponents/StyledContainer';

type Props = {};

const Profile: FC = (props: Props) => {
  return (
    <StyledContainer>
      <MobileNavbar title='Дмитрий'></MobileNavbar>
    </StyledContainer>
  );
};

export default Profile;
