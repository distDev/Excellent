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
  del?: boolean;
};

const CardOrder: FC<Props> = ({
  img,
  name,
  price,
  handleDeleteCard,
  id,
  del = true,
}) => {
  return (
    <CardOrderContainer>
      <CardOrderMedia>
        <img src={img} alt='img' />
      </CardOrderMedia>
      <CardOrderTitle>{name}</CardOrderTitle>
      <CardOrderPrice>{price}</CardOrderPrice>
      {del ? (
        <CardOrderDelete onClick={() => handleDeleteCard(id)}>
          <RiCloseFill />
        </CardOrderDelete>
      ) : null}
    </CardOrderContainer>
  );
};

export default CardOrder;
