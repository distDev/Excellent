import React, { FC, useState } from 'react';
import OrderCards from '../../../../../Components/order-cards';
import TotalCheck from '../../../../../Components/total-check';
import { Container } from '../../../../../Components/ui-components/container';
import { useAppSelector } from '../../../../../Hooks/useAppSelector';
import { FormSubmit, FormSubmitButtom } from '../../styles';

type Props = {
  formik: any;
};

const FormStepThree: FC<Props> = ({ formik }) => {
  const [phone, setPhone] = useState(false);
  const [consent, setСonsent] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone((prev) => !prev);
  };
  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setСonsent((prev) => !prev);
  };

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
          start={formik.values.start}
          end={formik.values.end}
          brand={formik.values.brand}
          model={formik.values.model}
          amount={totalSum}
        />
        <Container bg='secondBg'>
          <FormSubmit>
            <div className='form-checkbox'>
              <div className='option-wrapper'>
                <input
                  id='phoneCheck'
                  type='checkbox'
                  onChange={handlePhoneChange}
                />
                <label htmlFor='phoneCheck'>Перезвонить мне</label>
              </div>
              <div className='option-wrapper'>
                <input
                  id='dataCheck'
                  type='checkbox'
                  onChange={handleConsentChange}
                />
                <label htmlFor='dataCheck'>
                  Даю согласие на обработку данных
                </label>
              </div>
            </div>
            <FormSubmitButtom
              type='submit'
              disabled={consent ? false : true}
              variant={consent ? 'successfully' : null}
            >
              Записаться
            </FormSubmitButtom>
          </FormSubmit>
        </Container>
      </Container>
    </>
  );
};

export default FormStepThree;
