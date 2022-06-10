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
  const brands = Object.keys(carsData.list).map((e) => e);
  
  // получение моделей
  const models = Object.entries(carsData.list)
    .filter((e) => e[0] === acriveBrand)
    .map((e) => e[1]);

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
        {brands.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
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
        {[...models][0]?.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </Select>
    </CarSelectsContainer>
  );
};

export default CarSelects;
