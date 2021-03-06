import styled from 'styled-components';

export const CardOrderContainer = styled.div`
  position: relative;
  padding: 20px 0px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};

  @media screen and (max-width: 479px) {
    position: relative;
    padding: 20px 0px;
    display: flex;
    gap: 12px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;

export const CardOrderMedia = styled.div`
  width: 86px;
  border-radius: 11px;
  background: ${({ theme: { background } }) => background.secondBg};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (max-width: 479px) {
    width: 86px;
    border-radius: 11px;
    background: ${({ theme: { background } }) => background.secondBg};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 60%;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const CardOrderTitle = styled.p`
  font-size: ${({ theme: { size } }) => size.text.small};
  max-width: 50%;
  color: ${({ theme: { colors } }) => colors.textMain};
  @media screen and (max-width: 479px) {
    font-size: ${({ theme: { size } }) => size.text.small};
    max-width: 50%;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const CardOrderPrice = styled.h4`
  align-self: flex-end;
  margin-left: auto;
  font-size: ${({ theme: { size } }) => size.title.small};
  color: ${({ theme: { colors } }) => colors.textMain};

  @media screen and (max-width: 479px) {
    align-self: flex-end;
    margin-left: auto;
    font-size: ${({ theme: { size } }) => size.title.small};
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const CardOrderDelete = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 20px;
  height: 20px;

  svg {
    color: ${({ theme: { colors } }) => colors.textSecond};
  }

  @media screen and (max-width: 479px) {
    position: absolute;
    top: 20px;
    right: 0;
    width: 20px;
    height: 20px;

    svg {
      color: ${({ theme: { colors } }) => colors.textSecond};
    }
  }
`;
