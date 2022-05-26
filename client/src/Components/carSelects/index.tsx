import React, { FC } from 'react';
import { Select } from '../uiComponents/select/index';
import { CarSelectsContainer } from './styles/carSelects';

type Props = {
  formik: any;
};

const CarSelects: FC<Props> = ({ formik }) => {
  return (
    <CarSelectsContainer>
      <Select
        variant={
          formik.touched.brand && formik.errors.brand
            ? 'error'
            : formik.touched.brand && !formik.errors.brand
            ? 'complited'
            : null
        }
        name='brand'
        {...formik.getFieldProps('brand')}
      >
        <option value='Марка'>Марка</option>
        <option value='Reno'>Renault</option>
      </Select>
      <Select
        name='model'
        variant={
          formik.touched.model && formik.errors.model
            ? 'error'
            : formik.touched.model && !formik.errors.model
            ? 'complited'
            : null
        }
        {...formik.getFieldProps('model')}
      >
        <option value='Модель'>Модель</option>
        <option value='Logan'>Logan</option>
        <option value='Arkana'>Arkana</option>
        <option value='Daster'>Daster</option>
      </Select>
    </CarSelectsContainer>
  );
};

export default CarSelects;
