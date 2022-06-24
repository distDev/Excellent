import { FC } from 'react';
import { IService } from '../../Types/serviceInterface';
import CardOrder from '../cardOrder';
import { OrderCardsContainer } from './styles/orderCards';

type Props = {
  del?: boolean;
  data: IService[];
};

const OrderCards: FC<Props> = ({ del, data }) => {
  return (
    <OrderCardsContainer>
      {data.length > 0 &&
        data.map(({ name, price, img, id }) => (
          <CardOrder
            id={id}
            key={id}
            name={name}
            price={price}
            img={img}
            del={del}
          />
        ))}
    </OrderCardsContainer>
  );
};

export default OrderCards;
