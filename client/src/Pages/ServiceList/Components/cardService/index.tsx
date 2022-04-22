import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Text } from '../../../../Components/StyledComponents/Text';
import { Title } from '../../../../Components/StyledComponents/Title';
import { Box } from '../../../../Components/StyledComponents/Box';
import { Virtual } from 'swiper';

import {
  CardServiceBody,
  CardServiceContainer,
  CardServiceHeader,
  CardServiceIndicator,
  CardServiceInfo,
  CardServiceSlider,
  CardServiceStatus,
} from './styles/cardService';
import { FC } from 'react';

interface Serv {
id: string; 
img: string
}

interface Props {
  date: string;
  id: string;
  status: string;
  amount: string;
  services: Serv[];
};

export const CardService: FC<Props> = ({ date, id, status, amount, services }) => {
  return (
    <CardServiceContainer id={id}>
      <CardServiceBody>
        <CardServiceHeader>
          <CardServiceStatus>
            <CardServiceIndicator />
            <Title variant='small'>{status}</Title>
          </CardServiceStatus>
          <CardServiceInfo>
            <Text color='grey'>{date}</Text>
            <Text color='grey'>{amount}</Text>
          </CardServiceInfo>
        </CardServiceHeader>
      </CardServiceBody>
      <CardServiceSlider>
        <Swiper
          spaceBetween={10}
          modules={[Virtual]}
          slidesPerView={3.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          virtual
        >
          {services.map((e, index) => (
            <SwiperSlide key={e.id}>
              <Box
                height='100px'
                borderRadius='10px'
                background='#e1e5f9'
              ></Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardServiceSlider>
    </CardServiceContainer>
  );
};
