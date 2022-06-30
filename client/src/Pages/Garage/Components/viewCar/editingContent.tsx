import { doc, updateDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import { FC } from 'react';
import { ModalFixButton } from '../../../../Components/modal/styles/modal';
import { Container } from '../../../../Components/uiComponents/container';
import { Input } from '../../../../Components/uiComponents/input';
import { db } from '../../../../Firebase/firebase-config';
import { useAppSelector } from '../../../../State/store';
import { ICar } from '../../../../Types/userInterfaces';
import { addCarValidation } from '../../../../validationShemes';
import { EditCarForm } from './styles/garageModalContent';

interface Props {
  data: ICar[];
  selectedCar: string;
  setCars: React.Dispatch<React.SetStateAction<ICar[]>>;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditingContent: FC<Props> = ({
  data,
  selectedCar,
  setCars,
  setShow,
}) => {
  const user = useAppSelector((state) => state.user.phoneNumber);
  const selectedCarRef = doc(db, 'cars', selectedCar);
  let carData: ICar = {
    id: '',
    brand: '',
    model: '',
    vin: '',
    year: 0,
    milleage: '',
  };
  
  const filterCarData = data.map((e) => {
    return (carData = {
      id: e.id,
      brand: e.brand,
      model: e.model,
      vin: e.vin,
      year: e.year,
      milleage: e.milleage,
    });
  });

  // Конфиг formik
  const formik = useFormik({
    initialValues: {
      brand: carData?.brand,
      model: carData?.model,
      vin: carData?.vin,
      year: carData?.year,
      milleage: carData?.milleage,
      user: user,
    },
    validationSchema: addCarValidation,
    onSubmit: async (values) => {
      // отправка изменений на сервер
      await updateDoc(selectedCarRef, {
        vin: values.vin,
        year: values.year,
        milleage: values.milleage,
      });
      // отправка данных в State
      setCars((prev) =>
        prev.map((e) =>
          e.id === selectedCar
            ? {
                ...e,
                vin: values.vin,
                year: values.year,
                milleage: values.milleage,
              }
            : e
        )
      );
      // закрытие модального окна
      setShow(false);
    },
  });


  return (
    <>
      <Container>
        <EditCarForm onSubmit={formik.handleSubmit}>
          <Input {...formik.getFieldProps('brand')} disabled={true} />
          <Input {...formik.getFieldProps('model')} disabled={true} />
          <Input
            placeholder='VIN'
            type='string'
            variant='complited'
            {...formik.getFieldProps('vin')}
          />
          <Input
            placeholder='Год выпуска'
            variant='complited'
            {...formik.getFieldProps('year')}
          />
          <Input
            placeholder='Пробег'
            variant='complited'
            {...formik.getFieldProps('milleage')}
          />
          <ModalFixButton type='submit' primary>
            Сохранить
          </ModalFixButton>
        </EditCarForm>
      </Container>
    </>
  );
};
