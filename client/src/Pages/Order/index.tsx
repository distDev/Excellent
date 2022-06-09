import React, { useState } from 'react';
import { OrderWrapper } from './components/styles/index';
import FormSteps from './components/formSteps/index';
import FormStepOne from './components/formStepOne/index';
import FormStepTwo from './components/formStepTwo/index';
import FormStepThree from './components/formStepThree/index';
import { useFormik } from 'formik';
import { orderFormValidation } from '../../validationShemes/index';
import axios from 'axios';
import { useAppSelector } from '../../State/store';

type Props = {};

const Order = (props: Props) => {
  const [step, setStep] = useState(0);
  const [hours, setHours] = useState('');
  const cartData = useAppSelector((state) => state.cart);
  const servicesData = cartData.map((e) => e.name).join(', ');
  console.log(servicesData);

  // отправка заявки в телеграм, тестовый бот
  const tgMessage = async () => {
    const data = await axios.post(
      `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_API_TOKEN}/sendMessage?chat_id=${process.env.REACT_APP_TELEGRAM_CHAT_ID}&text=Имя: ${formik.values.name}%0AНомер: ${formik.values.phone}%0AДень: ${formik.values.date}%0AЧас: ${formik.values.time}%0AМарка: ${formik.values.brand}%0AМодель: ${formik.values.model}%0AУслуги: ${formik.values.services}; `
    );
  };

  // Конфиг formik
  const formik = useFormik({
    initialValues: {
      brand: '',
      model: '',
      phone: '',
      name: '',
      date: '',
      time: hours,
      services: servicesData,
    },
    validationSchema: orderFormValidation,
    onSubmit: (values) => {
      tgMessage();
    },
  });

  return (
    <OrderWrapper>
      <FormSteps step={step} setStep={setStep} formik={formik}>
        <FormStepOne formik={formik} setStep={setStep} />
        <FormStepTwo formik={formik} setHours={setHours} setStep={setStep} />
        <FormStepThree formik={formik} />
      </FormSteps>
    </OrderWrapper>
  );
};

export default Order;
