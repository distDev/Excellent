import { doc, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import { FC } from 'react';
import CarSelects from '../../../../Components/car-selects';
import { ModalFixButton } from '../../../../Components/modal/styles/modal';
import { Container } from '../../../../Components/ui-components/container';
import { Input } from '../../../../Components/ui-components/input';
import { db } from '../../../../Firebase/firebase-config';
import { ICar } from '../../../../Types/userInterfaces';
import { addCarValidation } from '../../../../ValidationShemes';
import styled from 'styled-components/macro';
import { useAppSelector } from '../../../../Hooks/useAppSelector';
import { useLockBodyScroll } from '../../../../Hooks/useLockBodyScroll';

type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCars: React.Dispatch<any>;
};

const AddCarContent: FC<Props> = ({ setShow, setCars }) => {
  const user = useAppSelector((state) => state.user?.phoneNumber);
  const newId = Date.now() + user!.slice(2);
  const carsCollectionRef = doc(db, 'cars', newId);

  // Блокировка скрола
   useLockBodyScroll();

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
      // adding car to firebase
      await setDoc(carsCollectionRef, {
        brand: values.brand,
        model: values.model,
        vin: values.vin,
        year: values.year,
        milleage: values.milleage,
        user: values.user,
      });
      // adding car to local state
      setCars((data: ICar[]) => [
        ...data,
        {
          brand: values.brand,
          model: values.model,
          vin: values.vin,
          year: values.year,
          milleage: values.milleage,
          user: values.user,
          id: newId,
        },
      ]);
      // закрытие модального окна
      setShow(false);
    },
  });

  console.log(formik.errors);

  return (
    <Container>
      <AddCarForm onSubmit={formik.handleSubmit}>
        <CarSelects formik={formik} />
        <Input
          placeholder='Год выпуска'
          {...formik.getFieldProps('year')}
          type='number'
        />
        <Input
          placeholder='VIN'
          {...formik.getFieldProps('vin')}
          variant={
            formik.touched.vin && formik.errors.vin
              ? 'error'
              : formik.touched.vin && !formik.errors.vin
              ? 'complited'
              : null
          }
        />
        <Input placeholder='Пробег' {...formik.getFieldProps('milleage')} />
        <ModalFixButton primary type='submit' data-cy="add-car-submit">
          Добавить
        </ModalFixButton>
      </AddCarForm>
    </Container>
  );
};

export default AddCarContent;

const AddCarForm = styled.form`
  display: grid;
  gap: 15px;
`;
