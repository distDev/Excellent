import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import CarSelects from '../../../../Components/carSelects';
import { ModalFixButton } from '../../../../Components/modal/styles/modal';
import { Container } from '../../../../Components/uiComponents/container';
import { Input } from '../../../../Components/uiComponents/input';
import { db } from '../../../../Firebase/firebase-config';
import { useAppSelector } from '../../../../State/store';
import { addCarValidation } from '../../../../validationShemes';
import { AddCarForm } from './styles/addCarContent';

type Props = {};

const AddCarContent = (props: Props) => {
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
      await addDoc(carsCollectionRef, {
        brand: values.brand,
        model: values.model,
        vin: values.vin,
        year: values.year,
        milleage: values.milleage,
        user: values.user,
      });
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
