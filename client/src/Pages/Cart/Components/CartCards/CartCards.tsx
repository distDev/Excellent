import { FC, useState } from 'react';
import MediumCard from '../../../../Components/MediumCard/MediumCard';
import { smallCards } from '../../../../Utils/content';
import { StyledCartCards } from '../StyledComponents/StyledCartCards';

type Props = {};

const CartCards: FC = (props: Props) => {

  const [data, setData] = useState(smallCards);

  const handleDeleteCard = (id: string) => {
   const filt = data.filter((e) => e.id !== id)
   setData(filt)
  };

  return (
    <StyledCartCards>
      {data.map(({ name, price, img, id }) => (
        <MediumCard
          id={id}
          key={id}
          name={name}
          price={price}
          img={img}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
    </StyledCartCards>
  );
};

export default CartCards;
