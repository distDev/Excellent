import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import { ProfileContentContainer } from './styles/profileContent';

type Props = {};

const ProfileContent: FC = ({ children }) => {
  const pcView = window.innerWidth > 900;

  if (pcView) {
    return <ProfileContentContainer>{children}</ProfileContentContainer>;
  }
  
  return createPortal(
    <>
      <ProfileContentContainer>{children}</ProfileContentContainer>
    </>,
    document.body
  );
};

export default ProfileContent;
