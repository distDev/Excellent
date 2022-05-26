import React, { useState } from 'react';
import { OrderWrapper } from './components/styles/index';
import FormSteps from './components/formSteps/index';
import FormStepOne from './components/formStepOne/index';
import FormStepTwo from './components/formStepTwo/index';
import FormStepThree from './components/formStepThree/index';
import { useFormik } from 'formik';
import { orderFormValidation } from '../../validationShemes/index';
import axios from 'axios';

type Props = {};

const Order = (props: Props) => {
  const [step, setStep] = useState(0);
  const [hours, setHours] = useState('');

  const token = '5170530941:AAGAyPvDQrlp29nrfiSbBZMlSMiW-CQTRao';
  const chatId = '-1001729364284';

  // отправка заявки в телеграм, тестовый бот
  const tgMessage = async () => {
    const data = await axios.post(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=Имя: ${formik.values.name}%0AНомер: ${formik.values.phone}%0AДень: ${formik.values.date}%0AЧас: ${formik.values.time}%0AМарка: ${formik.values.brand}%0AМодель: ${formik.values.model}%0AУслуги: ${formik.values.services}; `
    );
  };

  // Конфиг formik
  const formik = useFormik({
    initialValues: {
      brand: '',
      model: '',
      phone: '89258764788',
      name: 'Иван',
      date: '',
      time: hours,
      services: 'Замена масла, Ремонт ходовой, Диагностика двигателя', //тестовые данные
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
