import React, { FC } from 'react';
import { Select } from '../uiComponents/select/index';
import { CarSelectsContainer } from './styles/carSelects';

type Props = {
  brandValue: any;
  brandChange: any;
  modeldValue: any;
  modelChange: any;
};

const CarSelects: FC<Props> = ({
  brandValue,
  brandChange,
  modeldValue,
  modelChange,
}) => {
  return (
    <CarSelectsContainer>
      <Select name='brand' value={brandValue} onChange={brandChange}>
        <option value='Марка'>Марка</option>
        <option value='Reno'>Renault</option>
      </Select>
      <Select name='model' value={modeldValue} onChange={modelChange}>
        <option value='Модель'>Модель</option>
        <option value='Logan'>Logan</option>
        <option value='Arkana'>Arkana</option>
        <option value='Daster'>Daster</option>
      </Select>
    </CarSelectsContainer>
  );
};

export default CarSelects;
