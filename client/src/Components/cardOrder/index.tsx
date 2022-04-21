import { FC } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import {
  CardOrderContainer,
  CardOrderDelete,
  CardOrderMedia,
  CardOrderPrice,
  CardOrderTitle,
} from './styles/cardOrder';

type Props = {
  img: string;
  name: string;
  price: string;
  id: string;
  handleDeleteCard: (id: string) => void;
};

const CardOrder: FC<Props> = ({ img, name, price, handleDeleteCard, id }) => {
  return (
    <CardOrderContainer>
      <CardOrderMedia>
        <img src={img} alt='img' />
      </CardOrderMedia>
      <CardOrderTitle>{name}</CardOrderTitle>
      <CardOrderPrice>{price}</CardOrderPrice>
      <CardOrderDelete onClick={() => handleDeleteCard(id)}>
        <RiCloseFill />
      </CardOrderDelete>
    </CardOrderContainer>
  );
};

export default CardOrder;
