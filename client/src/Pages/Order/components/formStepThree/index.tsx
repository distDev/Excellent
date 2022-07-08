import { FC } from 'react';
import OrderCards from '../../../../Components/orderCards';
import TotalCheck from '../../../../Components/TotalCheck';
import { Container } from '../../../../Components/uiComponents/container';
import { Input } from '../../../../Components/uiComponents/input';
import { Text } from '../../../../Components/uiComponents/text';
import { useAppSelector } from '../../../../State/store';
import {
  FormCheckboxContainer,
  FormCheckboxItem,
  FormSubmit,
  FormSubmitButtom,
} from '../styles';

type Props = {
  formik: any;
};

const FormStepThree: FC<Props> = ({ formik }) => {
  const cartData = useAppSelector((state) => state.cart);
  const totalSum =
    cartData &&
    [...cartData].map((e) => Number(e.price)).reduce((a, b) => a + b);
  return (
    <>
      <Container>
        <OrderCards data={cartData} del={false} />
      </Container>
      <Container variant='large'>
        <TotalCheck
          date={formik.values.date}
          time={formik.values.time}
          brand={formik.values.brand}
          model={formik.values.model}
          amount={totalSum}
        />
        <Container bg='secondBg'>
          <FormSubmit>
            <FormCheckboxContainer>
              <FormCheckboxItem>
                <input id='calling' type='checkbox' />
                <label htmlFor='calling'>
                  <Text>Перезвонить мне</Text>
                </label>
              </FormCheckboxItem>
              <FormCheckboxItem>
                <input id='consent' type='checkbox' />
                <label htmlFor='consent'>
                  <Text>Даю согласие на обработку данных</Text>
                </label>
              </FormCheckboxItem>
            </FormCheckboxContainer>
            <FormSubmitButtom type='submit'>Записаться</FormSubmitButtom>
          </FormSubmit>
        </Container>
      </Container>
    </>
  );
};

export default FormStepThree;
