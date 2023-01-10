import { FC, useState } from 'react';
import FormUserCar from '../../../user-cars/index';
import CarSelects from '../../../../../../Components/car-selects/index';
import { Text } from '../../../../../../Components/ui-components/text';
import { FormItem } from '../../../styles/index';
import { ICar } from '../../../../../../Types/userInterfaces';
import styled from 'styled-components/macro';

type Props = {
  addCar: boolean;
  formik: any;
  cars: ICar[];
};

const FormAuthUser: FC<Props> = ({ addCar, formik, cars }) => {
  const [selectedCar, setSelectedCar] = useState('');

  // выбранный автомобиль
  const handleSelect = (id: string, brand: string, model: string) => {
    setSelectedCar(id);
    formik.setFieldValue('brand', brand);
    formik.setFieldValue('model', model);
  };

  return (
    <>
      {(addCar || cars.length === 0) && (
        <>
          <FormItem>
            <Text color='textSecond'>Выберите автомобиль</Text>
            <CarSelects formik={formik} />
          </FormItem>
        </>
      )}

      {!addCar && cars.length > 0 && (
        <>
          <FormItem>
            <Text color='textSecond'>Выберите автомобиль</Text>
            <FormUserCarContainer>
              {cars.map((e) => (
                <FormUserCar
                  id={e.id}
                  key={e.id}
                  brand={e.brand}
                  model={e.model}
                  year={e.year}
                  onClick={() => handleSelect(e.id, e.brand, e.model)}
                  variant={selectedCar === e.id ? 'active' : null}
                />
              ))}
            </FormUserCarContainer>
          </FormItem>
        </>
      )}
    </>
  );
};

export default FormAuthUser;

const FormUserCarContainer = styled.div`
  display: grid;
  gap: 15px;
  max-height: 250px;
  overflow-y: scroll;
  padding: 1px;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (max-width: 480px) {
    display: grid;
    gap: 15px;
    max-height: 250px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
