import styled from 'styled-components/macro';

interface IIndicator {
  color: string;
}

export const ModalStatus = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
    margin: 0px auto;
  }
`;

export const ModalStatusIcon = styled.div<IIndicator>`
  @media screen and (max-width: 479px) {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme, color }) =>
      color === 'Выполнено'
        ? theme.background.green
        : color === 'В процессе'
        ? theme.background.purple
        : color === 'Заявка принята'
        ? '#DEE21A'
        : theme.background.primary};

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

export const CardServiceCancelButton = styled.button`
  @media screen and (max-width: 479px) {
    padding: 20px 40px;
    border-radius: 30px;
    margin-top: 25px;
    border: none;
    background: ${({ theme: { background } }) => background.button};
    color: ${({ theme: { colors } }) => colors.textSecond};
    cursor: pointer;
  }
`;
