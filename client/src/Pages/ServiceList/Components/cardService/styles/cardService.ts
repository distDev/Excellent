import styled from 'styled-components/macro';

interface IServiceIndicator {
  color: string;
}

export const CardServiceContainer = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  }
`;

export const CardServiceBody = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const CardServiceHeader = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }
`;

export const CardServiceStatus = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;




export const CardServiceIndicator = styled.div<IServiceIndicator>`
  @media screen and (max-width: 479px) {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: ${({ theme, color }) =>
      color === 'Выполнено'
        ? theme.background.green
        : color === 'В процессе'
        ? theme.background.purple
        : color === 'Заявка принята'
        ? '#DEE21A'
        : theme.background.primary};
  }
`;

export const CardServiceInfo = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    gap: 15px;
  }
`;

export const CardServiceSlider = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    overflow: hidden;
  }
`;
export const CardServiceSliderItem = styled.div`
  @media screen and (max-width: 479px) {
    height: 100px;
    border-radius: 10px;
    background: #f8f7f5;
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

export const CardServiceTitle = styled.h3`
  @media screen and (max-width: 479px) {
    font-size: ${({ theme: { size } }) => size.title.small};
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.textMain};
    font-weight: 600;
  }
`;

export const CardServiceSubtitle = styled.h3`
  @media screen and (max-width: 479px) {
    font-size: ${({ theme: { size } }) => size.title.extraSmall};
    color: ${({ theme: { colors } }) => colors.textSecond};
    font-weight: 600;
  }
`;
