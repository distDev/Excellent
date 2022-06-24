import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  CardServiceBody,
  CardServiceContainer,
  CardServiceHeader,
  CardServiceIndicator,
  CardServiceInfo,
  CardServiceSlider,
  CardServiceSliderItem,
  CardServiceStatus,
  CardServiceSubtitle,
  CardServiceTitle,
} from './styles/cardService';
import { FC } from 'react';
import { IServiceList } from '../../../../Types/serviceInterface';

interface Props {
  onClick: () => void;
}

export const CardService: FC<Props & IServiceList> = ({
  date,
  id,
  status,
  amount,
  services,
  time,
  onClick,
}) => {
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
              {date} в {time}
            </CardServiceSubtitle>
            <CardServiceSubtitle>{amount} ₽</CardServiceSubtitle>
          </CardServiceInfo>
        </CardServiceHeader>
      </CardServiceBody>
      <CardServiceSlider>
        <Swiper
          spaceBetween={10}
          slidesPerView={3.5}
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
