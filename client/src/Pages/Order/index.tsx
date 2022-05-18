import React, { useState } from 'react'
import {OrderWrapper} from './components/styles/index';
import FormSteps from './components/formSteps/index';
import FormStepOne from './components/formStepOne/index';
import FormStepTwo from './components/formStepTwo/index';
import FormStepThree from './components/formStepThree/index';
 import { useFormik } from 'formik';

type Props = {}

const Order = (props: Props) => {

  const [step, setStep] = useState(0);

  // Конфиг формика
  const formik = useFormik({
    initialValues: {
      car: '',
      phone: '',
      name: '',
      date: '',
    },
    onSubmit: (values) => {
      if (step < 2) {
        setStep((prev) => prev + 1);
      } else alert(JSON.stringify(values));
    },
  });

  return (
    <OrderWrapper>
      <FormSteps step={step} setStep={setStep}>
        <FormStepOne />
        <FormStepTwo />
        <FormStepThree />
      </FormSteps>
    </OrderWrapper>
  );
}

export default Order;