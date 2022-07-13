import styled from 'styled-components/macro';

export const ProfileContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 9fr 4fr;
  gap: 100px;

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
  }
`;

export const ProfileMenu = styled.div`
  width: auto;
  background: ${({ theme: { background } }) => background.mainBg};
  box-shadow: 0px 6px 37px 9px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  max-height: 243px;
  position: sticky;
  top: 30px;
  overflow: hidden;

  @media screen and (max-width: 479px) {
    width: auto;
    background: none;
    box-shadow: none;
    border-radius: 0;
    max-height: 100%;
    height: auto;
    top: 0;
    position: relative;
  }
`;
