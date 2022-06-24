import React, { useState } from 'react';
import { OrderWrapper } from './components/styles/index';
import FormSteps from './components/formSteps/index';
import FormStepOne from './components/formStepOne/index';
import FormStepTwo from './components/formStepTwo/index';
import FormStepThree from './components/formStepThree/index';
import { useFormik } from 'formik';
import { orderFormValidation } from '../../validationShemes/index';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../State/store';
import moment from 'moment';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../Firebase/firebase-config';
import { clearCart } from '../../State/action-creators';
import { useNavigate } from 'react-router-dom';
import { SUCCESS_ROUTE } from '../../Utils/routerConst';

const Order = () => {
  const [step, setStep] = useState(0);
  const [hours, setHours] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const apointColectionRef = collection(db, 'appointments');
  const cartData = useAppSelector((state) => state.cart);
  const servicesData = cartData.map((e) => e.name).join(', ');
  const user = useAppSelector((state) => state.user?.phoneNumber);
  const tgToken = '5170530941:AAGAyPvDQrlp29nrfiSbBZMlSMiW-CQTRao';
  const thChatId = '-1001729364284';
  const totalSum =
    cartData &&
    [...cartData].map((e) => Number(e.price)).reduce((a, b) => a + b);

  // Конфиг formik
  const formik = useFormik({
    initialValues: {
      brand: '',
      model: '',
      phone: user ? user : '',
      name: user ? user : '',
      date: '',
      time: hours,
      services: servicesData,
    },
    validationSchema: orderFormValidation,
    onSubmit: (values) => {
      tgMessage(values);
      setAppointments(values);
      navigate(SUCCESS_ROUTE);
      dispatch(clearCart());
    },
  });

  // отправка заявки в телеграм, тестовый бот
  const tgMessage = async (values: any) => {
    await axios.post(
      `https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${thChatId}&text=Имя: ${
        values.name
      }%0AНомер: ${values.phone}%0AДень: ${moment(values.date).format(
        'Do MMM'
      )}%0AЧас: ${values.time}%0AМарка: ${values.brand}%0AМодель: ${
        values.model
      }%0AУслуги: ${values.services}; `
    );
  };

  // добавление записи на ремонт в firebase
  const setAppointments = async (value: any) => {
    await addDoc(apointColectionRef, {
      phone: value.phone,
      date: moment(value.date).format('Do MMM'),
      time: value.time,
      brand: value.brand,
      model: value.model,
      name: value.name,
      amount: totalSum,
      services: cartData,
      status: 'Заявка принята',
    });
  };

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
