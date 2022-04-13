import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SmallCardContainer } from '../StyledComponents/SmallCardContainer';
import { Text } from '../StyledComponents/Text';
import { Title } from '../StyledComponents/Title';
import { Box } from '../StyledComponents/Box';


type Props = {};

export const ServiceCard = (props: Props) => {
  return (
    <SmallCardContainer display='flex' flexDirection='column' gap='20px'>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='flex-start'
        gap='15px'
      >
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='flex-start'
          flexDirection='column'
          gap='15px'
        >
          <Box display='flex' alignItems='center' gap='10px'>
            <Box
              height='12px'
              width='12px'
              borderRadius='50%'
              background='#41d3a0'
            ></Box>
            <Title variant='small'>Выполнено</Title>
          </Box>
          <Box display='flex' gap='15px'>
            <Text color='grey'>10 февраля в 16:00</Text>
            <Text color='grey'>54 000 ₽</Text>
          </Box>
        </Box>
      </Box>
      <Box>
        <Swiper
          spaceBetween={10}
          slidesPerView={3.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Box height='100px' borderRadius='10px' background='#e1e5f9'></Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box height='100px' borderRadius='10px' background='#e1e5f9'></Box>
          </SwiperSlide>
          <SwiperSlide>
             <Box height='100px' borderRadius='10px' background='#e1e5f9'></Box>
          </SwiperSlide>
          <SwiperSlide>
             <Box height='100px' borderRadius='10px' background='#e1e5f9'></Box>
          </SwiperSlide>
          <SwiperSlide>
             <Box height='100px' borderRadius='10px' background='#e1e5f9'></Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </SmallCardContainer>
  );
};
