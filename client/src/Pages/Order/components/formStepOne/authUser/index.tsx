import { FC, useEffect, useState } from 'react';
import FormUserCar from '../../formUserCar/index';
import CarSelects from '../../../../../Components/carSelects/index';
import { Text } from '../../../../../Components/uiComponents/text';
import { FormItem } from '../../styles/index';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../../Firebase/firebase-config';
import { useAppSelector } from '../../../../../State/store';
import { ICar } from '../../../../../Types/userInterfaces';

type Props = {
  addCar: boolean;
  formik: any;
};

const FormAuthUser: FC<Props> = ({ addCar, formik }) => {
  const [selectedCar, setSelectedCar] = useState('');
  const [cars, setCars] = useState<ICar[] | []>([]);
  const user = useAppSelector((state) => state.user?.phoneNumber);

  // получение автомобилей пользователя с сервера
  useEffect(() => {
    const getCars = async () => {
      const carsCollectionRef = query(
        collection(db, 'cars'),
        where('user', '==', user)
      );
      const data = await getDocs(carsCollectionRef);
      const initialData: any = data?.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setCars(initialData);
    };

    getCars();
  }, []);

  // выбранный автомобиль
  const handleSelect = (id: string, brand: string, model: string) => {
    setSelectedCar(id);
    formik.setFieldValue('brand', brand);
    formik.setFieldValue('model', model);
  };


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
          </FormItem>
        </>
      )}
    </>
  );
};

export default FormAuthUser;
