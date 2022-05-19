import { FC, useState } from 'react';
import CardOrder from '../cardOrder';
import { smallCards } from '../../Utils/content';
import { OrderCardsContainer } from './styles/orderCards';

type Props = {
  del?: boolean;
};

const OrderCards: FC<Props> = ({ del }) => {
  const [data, setData] = useState(smallCards);

  const handleDeleteCard = (id: string) => {
    const filt = data.filter((e) => e.id !== id);
    setData(filt);
  };

  return (
    <OrderCardsContainer>
      {data.map(({ name, price, img, id }) => (
        <CardOrder
          id={id}
          key={id}
          name={name}
          price={price}
          img={img}
          handleDeleteCard={handleDeleteCard}
          del={del}
        />
      ))}
    </OrderCardsContainer>
  );
};

export default OrderCards;
