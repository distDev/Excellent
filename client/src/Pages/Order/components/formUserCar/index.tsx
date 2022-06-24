import { FC, useState } from 'react';
import { FormUserCarContainer } from './styles/formUserCar';
import { Text } from '../../../../Components/uiComponents/text';
import { ICar } from '../../../../Types/userInterfaces';

type Props = {
  onClick?: any;
  variant?: 'active' | null;
};

const FormUserCar: FC<Props & ICar> = ({
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
