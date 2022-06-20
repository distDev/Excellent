import React, { FC } from 'react';
import { Select } from '../uiComponents/select/index';
import { CarSelectsContainer } from './styles/carSelects';
import carsData from '../../Utils/cars.json';

type Props = {
  formik: any;
};

const CarSelects: FC<Props> = ({ formik }) => {
  const acriveBrand = formik.values.brand;

  // получение брендов
  const brandsData = Object.keys(carsData.list).map((e) => e);

  // получение моделей
  const modelsData = Object.entries(carsData.list)
    .filter((e) => e[0] === acriveBrand)
    .flat(2)
    .slice(1);

  // рендер брендов
  const brands = brandsData.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  // рендер моделей
  const models = modelsData.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

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
        {brands}
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
        {models}
      </Select>
    </CarSelectsContainer>
  );
};

export default CarSelects;
