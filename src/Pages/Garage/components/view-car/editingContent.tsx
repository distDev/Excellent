import { doc, updateDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import { FC } from 'react';
import { ModalFixButton } from '../../../../Components/modal/styles/modal';
import { Container } from '../../../../Components/ui-components/container';
import { Input } from '../../../../Components/ui-components/input';
import { db } from '../../../../Firebase/firebase-config';
import { useAppSelector } from '../../../../Hooks/useAppSelector';
import { ICar } from '../../../../Types/userInterfaces';
import { addCarValidation } from '../../../../ValidationShemes';
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
  const user = useAppSelector((state) => state.user?.phoneNumber);
  const selectedCarRef = doc(db, 'cars', selectedCar);
  const { brand, model, vin, year, milleage } = data[0];

  console.log(selectedCar);

  // Конфиг formik
  const formik = useFormik({
    initialValues: {
      brand: brand,
      model: model,
      vin: vin ? vin : '',
      year: year,
      milleage: milleage ? milleage : '',
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
