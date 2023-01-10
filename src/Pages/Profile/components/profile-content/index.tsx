import React, { FC } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components/macro';

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

const ProfileContentContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: ${({ theme: { background } }) => background.body};
    top: 0;
    left: 0;
    overflow-y: scroll;
    padding-bottom: 90px;
  }
`;
