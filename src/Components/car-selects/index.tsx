import { FC } from 'react';
import { Select } from '../ui-components/select/index';
import styled from 'styled-components/macro';
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
      <div className='car-selects__item'>
        <Select
          variant={
            formik.touched.brand && formik.errors.brand
              ? 'error'
              : formik.touched.brand && !formik.errors.brand
              ? 'complited'
              : null
          }
          name='brand'    
          data-cy='car-brand-select'
          {...formik.getFieldProps('brand')}
        >
          <option value='Марка'>Марка</option>
          {brands}
        </Select>
      </div>

      <div className='car-selects__item'>
        <Select
          name='model'
          variant={
            formik.touched.model && formik.errors.model
              ? 'error'
              : formik.touched.model && !formik.errors.model
              ? 'complited'
              : null
          }
          data-cy='car-brand-model'
          {...formik.getFieldProps('model')}
        >
          <option value='Модель'>Модель</option>
          {models}
        </Select>
      </div>
    </CarSelectsContainer>
  );
};

export default CarSelects;

const CarSelectsContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  gap: 15px;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;
