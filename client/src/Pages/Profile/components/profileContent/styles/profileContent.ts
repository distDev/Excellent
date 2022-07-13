import styled from 'styled-components/macro';

export const ProfileContentContainer = styled.div`
  width: auto;
  position: relative;

  @media screen and (max-width: 479px) {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: ${({ theme: { background } }) => background.body};
    top: 0;
    left: 0;
  }
`;
