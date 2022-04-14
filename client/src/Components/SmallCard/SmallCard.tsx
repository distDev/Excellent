
import { RiCloseFill } from 'react-icons/ri';
import { Box } from '../StyledComponents/Box';
import { IconBox } from '../StyledComponents/IconBox';
import { ImageBox } from '../StyledComponents/ImageBox';
import { Text } from '../StyledComponents/Text';

type Props = {};

const SmallCard = (props: Props) => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      padding='20px 0px'
      borderBottom='1px solid #F5F6FB'
    >
      <Box display='flex' gap='12px'>
        <ImageBox width='86px' height='86px' background='light-grey'></ImageBox>
        <Text variant='small'>Диагностика двигателя</Text>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        alignItems='flex-end'
      >
        <IconBox height='20px' width='20px' color='#CACACA'>
          <RiCloseFill />
        </IconBox>
        <Text >500 ₽</Text>
      </Box>
    </Box>
  );
};

export default SmallCard;
