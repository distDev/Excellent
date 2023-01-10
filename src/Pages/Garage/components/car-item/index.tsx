import { FC } from 'react';
import styled from 'styled-components/macro';
import { Text } from '../../../../Components/ui-components/text';
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
  
  // удаление автомобиля
  const removeCar = async (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    const selectedCarRef = doc(db, 'cars', id);
    await deleteDoc(selectedCarRef);
    setCars((prev: ICar[]) => prev.filter((e: ICar) => e.id !== id));
  };

  return (
    <CarItemContainer onClick={onClick}>
      <Text color='textMain' variant='normal'>
        <strong>
          {brand} {model}
        </strong>
      </Text>
      <CarItemBox>
        <Text color='textMain' variant='normal'>
          <strong>{year}</strong>
        </Text>
        <AiOutlineDelete onClick={(e) => removeCar(e, id)} />
      </CarItemBox>
    </CarItemContainer>
  );
};

export default CarItem;

const CarItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    padding: 30px 0px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;

const CarItemBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    height: 25px;
    width: 25px;
    color: ${({ theme: { colors } }) => colors.textSecond};
    margin-left: 40px;
  }
`;
