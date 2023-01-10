import { FC, useEffect, useState } from 'react';
import { Container } from '../../../../../Components/ui-components/container/index';
import { FormAddCarButton, FormButton, FormButtons } from '../../styles';
import FormNormalUser from './regularUser/index';
import FormAuthUser from './authUser/index';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../../Firebase/firebase-config';
import { ICar } from '../../../../../Types/userInterfaces';
import { useAppSelector } from '../../../../../Hooks/useAppSelector';

type Props = {
  formik: any;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const FormStepOne: FC<Props> = ({ formik, setStep }) => {
  const [addCar, setAddCar] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [cars, setCars] = useState<ICar[] | []>([]);
  const user = useAppSelector((state) => state.user?.phoneNumber);

  // получение автомобилей пользователя с сервера
  useEffect(() => {
    if (user) {
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
        setIsPending(false);
      };

      getCars();
    } else {
      setIsPending(false);
    }
  }, []);

  // Проверка полей формы на валидность
  const checkValid =
    !formik.errors.phone &&
    String(formik.values.phone).length > 9 &&
    !formik.errors.name &&
    formik.values.name.length > 0 &&
    formik.values.brand.length > 0 &&
    formik.values.model.length > 0;

  return (
    <Container>
      {isPending && <div>Загрузка...</div>}

      {user && !isPending && (
        <FormAuthUser addCar={addCar} formik={formik} cars={cars} />
      )}

      {!user && !isPending && <FormNormalUser formik={formik} />}
      <FormButtons>
        {user && !addCar && cars.length > 0 && (
          <FormAddCarButton type='button' onClick={() => setAddCar(true)}>
            Добавить автомобиль
          </FormAddCarButton>
        )}

        <FormButton
          disabled={checkValid ? false : true}
          type='button'
          onClick={() => setStep((s) => s + 1)}
          variant={checkValid ? 'successfully' : null}
          data-cy='step-one-order-btn'
        >
          Далее
        </FormButton>
      </FormButtons>
    </Container>
  );
};

export default FormStepOne;
