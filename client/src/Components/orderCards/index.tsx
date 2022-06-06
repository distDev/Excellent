import { FC, useState } from 'react';
import CardOrder from '../cardOrder';
import { smallCards } from '../../Utils/content';
import { OrderCardsContainer } from './styles/orderCards';
import { useAppSelector } from '../../State/store';

type Props = {
  del?: boolean;
};

const OrderCards: FC<Props> = ({ del }) => {
  const cartData = useAppSelector((state) => state.cart);

  return (
    <OrderCardsContainer>
      {cartData.length > 0 &&
        cartData.map(({ name, price, img, id }) => (
          <CardOrder
            id={id}
            key={id}
            name={name}
            price={price}
            img={img}
            del={del}
          />
        ))}
      {cartData.length === 0 && <h2>Корзина пуста!</h2>}
    </OrderCardsContainer>
  );
};

export default OrderCards;
