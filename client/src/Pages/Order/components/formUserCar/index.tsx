import { FC, useState } from 'react';
import { FormUserCarContainer } from './styles/formUserCar';
import { Text } from '../../../../Components/uiComponents/text';

type Props = {
  brand: string;
  model: string;
  year: string;
  onClick?: any;
  variant?: 'active' | null;
 
};

const FormUserCar: FC<Props> = ({
  brand,
  model,
  year,
  onClick,
  variant,
  
}) => {

  return (
    <FormUserCarContainer onClick={onClick} variant={variant}>
      <Text color='textSecond'>{`${brand} ${model}`}</Text>
      <Text color='textSecond'>{year}</Text>
    </FormUserCarContainer>
  );
};

export default FormUserCar;
