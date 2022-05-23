import React, { useState } from 'react';
import { OrderWrapper } from './components/styles/index';
import FormSteps from './components/formSteps/index';
import FormStepOne from './components/formStepOne/index';
import FormStepTwo from './components/formStepTwo/index';
import FormStepThree from './components/formStepThree/index';
import { useFormik } from 'formik';
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
      phone: '',
      name: '',
      date: '',
      time: hours,
      services: 'Замена масла, Ремонт ходовой, Диагностика двигателя', //тестовые данные
    },
    onSubmit: (values) => {
      // если не последний шаг, то увеличивает step
      if (step < 2) {
        setStep((prev) => prev + 1);
      }
      // если шаг последний, то срабатывает submit
      else if (step === 2) {
        tgMessage();
      }
    },
  });

  return (
    <OrderWrapper>
      <FormSteps step={step} setStep={setStep} formik={formik}>
        <FormStepOne formik={formik} />
        <FormStepTwo formik={formik} setHours={setHours} />
        <FormStepThree formik={formik} />
      </FormSteps>
    </OrderWrapper>
  );
};

export default Order;
