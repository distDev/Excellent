import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import { FC } from 'react';
import CarSelects from '../../../../Components/carSelects';
import { ModalFixButton } from '../../../../Components/modal/styles/modal';
import { Container } from '../../../../Components/uiComponents/container';
import { Input } from '../../../../Components/uiComponents/input';
import { db } from '../../../../Firebase/firebase-config';
import { useAppSelector } from '../../../../State/store';
import { addCarValidation } from '../../../../validationShemes';
import { AddCarForm } from './styles/addCarContent';

type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCars: React.Dispatch<any>;
};

const AddCarContent: FC<Props> = ({ setShow, setCars }) => {
  const user = useAppSelector((state) => state.user?.phoneNumber);
  const carsCollectionRef = collection(db, 'cars');

  // Конфиг formik
  const formik = useFormik({
    initialValues: {
      brand: '',
      model: '',
      vin: '',
      year: '',
      milleage: '',
      user: user,
    },
    validationSchema: addCarValidation,
    onSubmit: async (values) => {
      // добавление автомобиля на сервер
      await addDoc(carsCollectionRef, {
        brand: values.brand,
        model: values.model,
        vin: values.vin,
        year: values.year,
        milleage: values.milleage,
        user: values.user,
      });
      // добавление автомобиля в state
      setCars((data: any) => [
        ...data,
        {
          brand: values.brand,
          model: values.model,
          vin: values.vin,
          year: values.year,
          milleage: values.milleage,
          user: values.user,
        },
      ]);
      // закрытие модального окна
      setShow(false);
    },
  });

  return (
    <Container>
      <AddCarForm onSubmit={formik.handleSubmit}>
        <CarSelects formik={formik} />
        <Input
          placeholder='Год выпуска'
          {...formik.getFieldProps('year')}
          type='number'
        />
        <Input placeholder='VIN' {...formik.getFieldProps('vin')} />
        <Input placeholder='Пробег' {...formik.getFieldProps('milleage')} />
        <ModalFixButton primary type='submit'>
          Добавить
        </ModalFixButton>
      </AddCarForm>
    </Container>
  );
};

export default AddCarContent;
