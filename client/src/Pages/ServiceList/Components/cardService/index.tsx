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

interface Serv {
  id: string;
  img: string;
}

interface Props {
  date: string;
  id: string;
  status: string;
  amount: string;
  services: Serv[];
  onClick: () => void;
}

export const CardService: FC<Props> = ({
  date,
  id,
  status,
  amount,
  services,
  onClick,
}) => {
  return (
    <CardServiceContainer id={id} onClick={onClick}>
      <CardServiceBody>
        <CardServiceHeader>
          <CardServiceStatus>
            <CardServiceIndicator />
            <CardServiceTitle>{status}</CardServiceTitle>
          </CardServiceStatus>
          <CardServiceInfo>
            <CardServiceSubtitle>{date}</CardServiceSubtitle>
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
