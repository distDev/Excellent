import { FC } from 'react';
import styled from 'styled-components/macro';

type Props = {
  date: string;
  start: string;
  end: string;
  amount: number;
  phone?: string;
  model?: string;
  brand?: string;
};

const TotalCheck: FC<Props> = ({
  date,
  start,
  end,
  amount,
  phone,
  model,
  brand,
}) => {
  return (
    <TotalCheckContainer>
      <TotalCheckTotal>
        <TotalCheckTotalSubtitle>Итого</TotalCheckTotalSubtitle>
        <TotalCheckTotalTitle>~{amount} ₽</TotalCheckTotalTitle>
      </TotalCheckTotal>
      <TotalCheckInfo>
        <TotalCheckInfoItem>
          <TotalCheckInfoTitle>Дата записи</TotalCheckInfoTitle>
          <TotalCheckInfoSubtitle>
            {date} в {start + ' - ' + end}
          </TotalCheckInfoSubtitle>
        </TotalCheckInfoItem>
        {phone && (
          <TotalCheckInfoItem>
            <TotalCheckInfoTitle>Телефон</TotalCheckInfoTitle>
            <TotalCheckInfoSubtitle>{phone}</TotalCheckInfoSubtitle>
          </TotalCheckInfoItem>
        )}
        {brand && (
          <TotalCheckInfoItem>
            <TotalCheckInfoTitle>Марка</TotalCheckInfoTitle>
            <TotalCheckInfoSubtitle>{brand}</TotalCheckInfoSubtitle>
          </TotalCheckInfoItem>
        )}
        {model && (
          <TotalCheckInfoItem>
            <TotalCheckInfoTitle>Модель</TotalCheckInfoTitle>
            <TotalCheckInfoSubtitle>{model}</TotalCheckInfoSubtitle>
          </TotalCheckInfoItem>
        )}
        <TotalCheckInfoItem>
          <TotalCheckInfoTitle>Адрес автосервиса</TotalCheckInfoTitle>
          <TotalCheckInfoSubtitle>
            Балашиха, обьездное шоссе, вл. 4
          </TotalCheckInfoSubtitle>
        </TotalCheckInfoItem>
      </TotalCheckInfo>
    </TotalCheckContainer>
  );
};

export default TotalCheck;

const TotalCheckContainer = styled.div`
  width: 100%;
  border-radius: 10px 10px 0px 0px;;
  left: 0;
  padding: 20px 13px 10px 13px;
  display: flex;
  flex-direction: column;
  background: ${({ theme: { background } }) => background.secondBg};

  @media screen and (max-width: 480px) {
    width: 100%;
    border-radius: 10px;
    left: 0;
    padding: 20px 13px;
    display: flex;
    flex-direction: column;
    background: ${({ theme: { background } }) => background.secondBg};
  }
`;

const TotalCheckTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px auto;
  }
`;

const TotalCheckInfo = styled.div`
  width: 100%;
  margin-top: 30px;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 30px;
  }
`;

const TotalCheckInfoItem = styled.div`
  display: grid;
  padding: 15px 0px;
  gap: 5px;
  border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.border} `};
  border-top: ${({ theme: { colors } }) => `1px solid ${colors.border} `};

  &:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    display: grid;
    padding: 15px 0px;
    gap: 5px;
    border-bottom: ${({ theme: { colors } }) => `1px solid ${colors.border} `};
    border-top: ${({ theme: { colors } }) => `1px solid ${colors.border} `};
  }
`;

const TotalCheckTotalTitle = styled.h2`
  color: ${({ theme: { colors } }) => colors.textMain};
  font-size: ${({ theme: { size } }) => size.title.large};
  font-weight: 700;

  @media screen and (max-width: 480px) {
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: ${({ theme: { size } }) => size.title.large};
    font-weight: 700;
  }
`;

const TotalCheckTotalSubtitle = styled.h4`
  color: ${({ theme: { colors } }) => colors.textMain};
  font-size: ${({ theme: { size } }) => size.text.small};
  font-weight: 600;
  @media screen and (max-width: 480px) {
    color: ${({ theme: { colors } }) => colors.textSecond};
    font-size: ${({ theme: { size } }) => size.text.small};
    font-weight: 500;
  }
`;

const TotalCheckInfoTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.textSecond};
  font-size: ${({ theme: { size } }) => size.text.small};
  font-weight: 600;

  @media screen and (max-width: 480px) {
    color: ${({ theme: { colors } }) => colors.textSecond};
    font-size: ${({ theme: { size } }) => size.text.small};
    font-weight: 500;
  }
`;

const TotalCheckInfoSubtitle = styled.p`
  color: ${({ theme: { colors } }) => colors.textMain};
  font-size: ${({ theme: { size } }) => size.text.small};
  font-weight: 300;

  @media screen and (max-width: 480px) {
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: ${({ theme: { size } }) => size.text.small};
    font-weight: 400;
  }
`;
