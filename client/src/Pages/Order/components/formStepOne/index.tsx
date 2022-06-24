import { FC, useState } from 'react';
import { Container } from '../../../../Components/uiComponents/container/index';
import { FormAddCarButton, FormButton, FormButtons } from '../styles';
import FormNormalUser from './normalUser/index';
import FormAuthUser from './authUser/index';
import { useAppSelector } from '../../../../State/store';

type Props = {
  formik: any;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const FormStepOne: FC<Props> = ({ formik, setStep }) => {
  const [addCar, setAddCar] = useState(false);
  const auth = useAppSelector((state) => state.user?.phoneNumber);

  // Проверка полей формы на валидность
  const checkValid =
    !formik.errors.phone &&
    String(formik.values.phone).length > 0 &&
    !formik.errors.name &&
    formik.values.name.length > 0 &&
    formik.values.brand.length > 0 &&
    formik.values.model.length > 0;

  return (
    <Container>
      {auth && <FormAuthUser addCar={addCar} formik={formik} />}
      {!auth && <FormNormalUser formik={formik} />}
      <FormButtons>
        {auth && !addCar && (
          <FormAddCarButton type='button' onClick={() => setAddCar(true)}>
            Добавить автомобиль
          </FormAddCarButton>
        )}
        <FormButton
          disabled={checkValid ? false : true}
          type='button'
          onClick={() => setStep((s) => s + 1)}
          variant={checkValid ? 'successfully' : null}
        >
          Далее
        </FormButton>
      </FormButtons>
    </Container>
  );
};

export default FormStepOne;
