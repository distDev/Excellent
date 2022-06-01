import { FC, useState } from 'react';
import FormUserCar from '../../formUserCar/index';
import CarSelects from '../../../../../Components/carSelects/index';
import { Text } from '../../../../../Components/uiComponents/text';
import { FormItem } from '../../styles/index';

type Props = {
  addCar: boolean;
  formik: any;
};

const FormAuthUser: FC<Props> = ({ addCar, formik }) => {
  const [selectedCar, setSelectedCar] = useState('');

  const authCarData = [
    {
      id: 'r21r21r2',
      brand: 'Toyota',
      model: 'Corolla',
      year: '2015',
    },
    {
      id: '2r1r12ge',
      brand: 'Hyndai',
      model: 'Elantra',
      year: '2020',
    },
  ];

  // выбранный автомобиль
  const handleSelect = (id: string, brand: string, model: string) => {
    setSelectedCar(id);
    formik.setFieldValue('brand', brand);
    formik.setFieldValue('model', model);
  };

  console.log(formik.values);

  return (
    <>
      {addCar ? (
        <>
          <FormItem>
            <Text color='textSecond'>Выберите автомобиль</Text>
            <CarSelects formik={formik} />
          </FormItem>
        </>
      ) : (
        <>
          <FormItem>
            <Text color='textSecond'>Выберите автомобиль</Text>
            {authCarData.map((e) => (
              <FormUserCar
                key={e.id}
                brand={e.brand}
                model={e.model}
                year={e.year}
                onClick={() => handleSelect(e.id, e.brand, e.model)}
                variant={selectedCar === e.id ? 'active' : null}
              />
            ))}
          </FormItem>
        </>
      )}
    </>
  );
};

export default FormAuthUser;
