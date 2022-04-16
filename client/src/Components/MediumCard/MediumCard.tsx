import { FC } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { Box } from '../StyledComponents/Box';
import { IconBox } from '../StyledComponents/IconBox';
import { ImageBox } from '../StyledComponents/ImageBox';
import { Text } from '../StyledComponents/Text';

type Props = {
  img: string;
  name: string;
  price: string;
  id: string;
  handleDeleteCard: (id: string) => void;
};

const MediumCard: FC<Props> = ({ img, name, price, handleDeleteCard, id }) => {
  return (
    <Box
      display='flex'
      justifyContent='space-between'
      padding='20px 0px'
      borderBottom='1px solid #f1f1f1'
    >
      <Box display='flex' gap='12px'>
        <ImageBox width='86px' height='86px' background='light-grey'>
          <img src={img} alt="" />
        </ImageBox>
        <Text variant='small'>{name}</Text>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        alignItems='flex-end'
      >
        <IconBox
          height='20px'
          width='20px'
          color='#CACACA'
          onClick={() => handleDeleteCard(id)}
        >
          <RiCloseFill />
        </IconBox>
        <Text>{price}</Text>
      </Box>
    </Box>
  );
};

export default MediumCard;
