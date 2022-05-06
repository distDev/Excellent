import styled from 'styled-components/macro';

export const ModalCheckContainer = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    border-radius: 10px;
    left: 0;
    padding: 20px 13px;
    display: flex;
    flex-direction: column;
    background: ${({ theme: { background } }) => background.secondBg};
  }
`;

export const ModalCheckTotal = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px auto;
  }
`;

export const ModalCheckInfo = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const ModalCheckInfoItem = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px 0px;
    gap: 5px;
    border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.border} `};
    border-top: ${({ theme: { colors } }) => `1px solid ${colors.border} `};
  }
`;

export const ModalCheckTotalTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.textMain};
  font-size: ${({ theme: { size } }) => size.title.large};
  font-weight: 700;

  @media screen and (max-width: 479px) {
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: ${({ theme: { size } }) => size.title.large};
    font-weight: 700;
  }
`;

export const ModalCheckTotalSubtitle = styled.h4`
  color: ${({ theme: { colors } }) => colors.textMain};
  font-size: ${({ theme: { size } }) => size.text.small};
  font-weight: 600;
  @media screen and (max-width: 479px) {
    color: ${({ theme: { colors } }) => colors.textSecond};
    font-size: ${({ theme: { size } }) => size.text.small};
    font-weight: 600;
  }
`;

export const ModalCheckInfoTitle = styled.p`
  @media screen and (max-width: 479px) {
    color: ${({ theme: { colors } }) => colors.textSecond};
    font-size: ${({ theme: { size } }) => size.text.small};
    font-weight: 600;
  }
`;

export const ModalCheckInfoSubtitle = styled.p`
  @media screen and (max-width: 479px) {
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: ${({ theme: { size } }) => size.text.small};
    font-weight: 600;
  }
`;
