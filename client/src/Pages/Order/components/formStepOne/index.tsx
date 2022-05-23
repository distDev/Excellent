import { FC, useState } from 'react';
import { Container } from '../../../../Components/uiComponents/container/index';
import { FormAddCarButton, FormButton, FormButtons } from '../styles';
import FormNormalUser from './normalUser/index';
import FormAuthUser from './authUser/index';

type Props = {
  formik: any;
};

const FormStepOne: FC<Props> = ({ formik }) => {
  const [addCar, setAddCar] = useState(false);
  const auth = true;

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
        <FormButton type='submit'>Далее</FormButton>
      </FormButtons>
    </Container>
  );
};

export default FormStepOne;
