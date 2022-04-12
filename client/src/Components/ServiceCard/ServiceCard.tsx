import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Paragraph } from '../StyledComponents/Paragraph';
import {
  ServiceCardContainer,
  ServiceCardDescriprion,
  ServiceCardInfo,
  ServiceCardSlider,
  ServiceCardStatus,
  ServiceCardText,
} from '../StyledComponents/StyledServiceCard';
import { Typography } from '../StyledComponents/Typography';
import 'swiper/css';


type Props = {};

export const ServiceCard = (props: Props) => {
  return (
    <ServiceCardContainer>
      <ServiceCardDescriprion>
        <ServiceCardText>
          <ServiceCardStatus>
            <div></div>
            <Typography variant='small'>Выполнено</Typography>
          </ServiceCardStatus>
          <ServiceCardInfo>
            <Paragraph color='grey'>10 февраля в 16:00</Paragraph>
            <Paragraph color='grey'>54 000 ₽</Paragraph>
          </ServiceCardInfo>
        </ServiceCardText>
      </ServiceCardDescriprion>
      <ServiceCardSlider>
        <Swiper
          spaceBetween={10}
          slidesPerView={3.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className='test-slider-item'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='test-slider-item'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='test-slider-item'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='test-slider-item'></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='test-slider-item'></div>
          </SwiperSlide>
        </Swiper>
      </ServiceCardSlider>
    </ServiceCardContainer>
  );
};
