import { FC } from 'react';
import { CarItemContainer } from './styles/carItem';
import { Text } from '../../../../Components/uiComponents/text';

type Props = {
  brand: string;
  model: string;
  year: number;
  onClick: () => void;
  id: string;
};

const CarItem: FC<Props> = ({ brand, model, year, id, onClick }) => {
  return (
    <CarItemContainer onClick={onClick}>
      <Text color='textMain' variant='normal'>
        <strong>
          {brand} {model}
        </strong>
      </Text>
      <Text color='textMain' variant='normal'>
        <strong>{year}</strong>
      </Text>
    </CarItemContainer>
  );
};

export default CarItem;
