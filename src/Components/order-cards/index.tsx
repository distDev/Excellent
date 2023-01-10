import { FC } from 'react';
import { IService } from '../../Types/serviceInterface';
import CardOrder from '../card-order';
import styled from 'styled-components/macro';

type Props = {
  del?: boolean;
  data: IService[];
};

const OrderCards: FC<Props> = ({ del, data }) => {
  return (
    <OrderCardsContainer data-cy='cart-container'>
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

const OrderCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 125px;
  margin-top: 10px;
  padding-bottom: 40px;
`;
