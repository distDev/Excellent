import { FC } from 'react';
import { CarItemContainer, CartItemBox } from './styles/carItem';
import { Text } from '../../../../Components/uiComponents/text';
import { AiOutlineDelete } from 'react-icons/ai';
import { ICar } from '../../../../Types/userInterfaces';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../Firebase/firebase-config';

type Props = {
  brand: string;
  model: string;
  year: number;
  id: string;
  onClick: () => void;
  setCars: React.Dispatch<any>;
};

const CarItem: FC<Props> = ({ brand, model, year, id, onClick, setCars }) => {
  const removeCar = async (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    const selectedCarRef = doc(db, 'cars', id);
    // удаление автомобиля с сервера
    await deleteDoc(selectedCarRef);
    // удаление из state
    setCars((prev: ICar[]) => prev.filter((e: ICar) => e.id !== id));
  };

  return (
    <CarItemContainer onClick={onClick}>
      <Text color='textMain' variant='normal'>
        <strong>
          {brand} {model}
        </strong>
      </Text>
      <CartItemBox>
        <Text color='textMain' variant='normal'>
          <strong>{year}</strong>
        </Text>
        <AiOutlineDelete onClick={(e) => removeCar(e, id)} />
      </CartItemBox>
    </CarItemContainer>
  );
};

export default CarItem;
