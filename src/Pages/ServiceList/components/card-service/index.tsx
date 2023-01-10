import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styled from 'styled-components/macro';
import { FC } from 'react';
import { IServiceList } from '../../../../Types/serviceInterface';
import { pcView } from '../../../../Utils/helperConst';

interface Props {
  onClick: () => void;
}

export const CardService: FC<Props & IServiceList> = ({
  date,
  id,
  status,
  amount,
  services,
  start,
  end,
  onClick,
}) => {
  const smView = window.innerWidth > 319 && window.innerWidth < 381;

  return (
    <CardServiceContainer id={id} onClick={onClick}>
      <CardServiceBody>
        <CardServiceHeader>
          <CardServiceStatus>
            <CardServiceIndicator color={status} />
            <CardServiceTitle>{status}</CardServiceTitle>
          </CardServiceStatus>
          <CardServiceInfo>
            <CardServiceSubtitle>
              {date} в {start + ' - ' + end}
            </CardServiceSubtitle>
            <CardServiceSubtitle>{amount} ₽</CardServiceSubtitle>
          </CardServiceInfo>
        </CardServiceHeader>
      </CardServiceBody>
      <CardServiceSlider>
        <Swiper
          spaceBetween={10}
          slidesPerView={pcView ? 5 : smView ? 2.7 : 3.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {services &&
            services.map((e) => (
              <SwiperSlide key={e.id}>
                <CardServiceSliderItem>
                  <img src={e.img} alt='img' />
                </CardServiceSliderItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </CardServiceSlider>
    </CardServiceContainer>
  );
};

interface IServiceIndicator {
  color: string;
}

const CardServiceContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  width: 100%;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 480px) {
    display: grid;
    gap: 20px;
    padding: 20px 0;
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.border}`};
  }
`;

const CardServiceBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const CardServiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
  }
`;

const CardServiceStatus = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
  }
`;

const CardServiceIndicator = styled.div<IServiceIndicator>`
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
  margin-right: 10px;

  @media screen and (max-width: 480px) {
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

const CardServiceInfo = styled.div`
  display: grid;
  gap: 15px;

  @media screen and (max-width: 480px) {
    display: grid;
    gap: 15px;
  }
`;

const CardServiceSlider = styled.div`
  width: 80%;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    width: 100%;
    overflow: hidden;
  }
`;
const CardServiceSliderItem = styled.div`
  height: 100px;
  border-radius: 10px;
  background: ${({ theme: { background } }) => background.secondBg};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (max-width: 480px) {
    height: 100px;
    border-radius: 10px;
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

const CardServiceTitle = styled.h3`
  font-size: ${({ theme: { size } }) => size.title.small};
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.textMain};
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: ${({ theme: { size } }) => size.title.small};
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.textMain};
    font-weight: 600;
  }
`;

const CardServiceSubtitle = styled.h3`
  font-size: ${({ theme: { size } }) => size.title.extraSmall};
  color: ${({ theme: { colors } }) => colors.textSecond};
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: ${({ theme: { size } }) => size.title.extraSmall};
    color: ${({ theme: { colors } }) => colors.textSecond};
    font-weight: 600;
  }
`;
