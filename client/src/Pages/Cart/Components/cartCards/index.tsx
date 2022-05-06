import { FC, useState } from 'react';
import CardOrder from '../../../../Components/cardOrder';
import { smallCards } from '../../../../Utils/content';
import { CartCardsContainer } from './styles/cartCards';

type Props = {
  del?: boolean,
};

const CartCards:FC<Props> = ({del}) => {
  const [data, setData] = useState(smallCards);

  const handleDeleteCard = (id: string) => {
    const filt = data.filter((e) => e.id !== id);
    setData(filt);
  };

  return (
    <CartCardsContainer>
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
    </CartCardsContainer>
  );
};

export default CartCards;
