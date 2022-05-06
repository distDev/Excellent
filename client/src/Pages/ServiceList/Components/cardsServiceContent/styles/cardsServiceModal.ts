import styled from 'styled-components/macro';

export const ModalStatus = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    margin: 0px auto;
  }
`;

export const ModalStatusIcon = styled.div`
  @media screen and (max-width: 479px) {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { background } }) => background.green};

    svg {
        width: 80%;
        height: 80%;

    }
  }
`;

export const ModalStatusTitle = styled.h2`
  @media screen and (max-width: 479px) {
    font-size: ${({ theme: { size } }) => size.title.medium};
  }
`;


