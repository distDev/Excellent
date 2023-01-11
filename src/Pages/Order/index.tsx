import { useState } from "react";
import { OrderWrapper } from "./components/styles/index";
import FormSteps from "./components/form-steps/index";
import FormStepOne from "./components/form-steps/step-one";
import FormStepTwo from "./components/form-steps/step-two";
import FormStepThree from "./components/form-steps/step-three";
import { useFormik } from "formik";
import { orderFormValidation } from "../../ValidationShemes/index";
import axios from "axios";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import { routerConst } from "../../Utils/routerConst";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { clearCart } from "../../Store/slices/cart-slice";

const Order = () => {
  const [step, setStep] = useState(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const apointColectionRef = collection(db, "appointments");
  const cartData = useAppSelector((state) => state.cart);
  const servicesData = cartData.map((e) => e.name).join(", ");
  const user = useAppSelector((state) => state.user?.phoneNumber);
  const userName = useAppSelector((state) => state.user?.name);
  const totalSum =
    cartData &&
    [...cartData].map((e) => Number(e.price)).reduce((a, b) => a + b);

  // Конфиг formik
  const formik = useFormik({
    initialValues: {
      brand: "",
      model: "",
      phone: user ? user : "",
      name: user ? userName || "" : "",
      date: "",
      start: "",
      end: "",
      services: servicesData,
    },
    validationSchema: orderFormValidation,
    onSubmit: (values) => {
      try {
        tgMessage(values);
        setAppointments(values);
        navigate(routerConst.SUCCESS_ROUTE);
        dispatch(clearCart());
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Отправка заявки в телеграм
  const tgMessage = async (values: any) => {
    await axios.post(
      `https://api.telegram.org/bot${
        process.env.REACT_APP_TG_TOKKEN
      }/sendMessage?chat_id=${process.env.REACT_APP_TG_CHAT_ID}&text=Имя: ${
        values.name
      }%0AНомер: ${user ? values.phone : "+7" + values.phone}%0AДень: ${
        values.date
      }%0AЧас: ${values.start}-${values.end}%0AМарка: ${
        values.brand
      }%0AМодель: ${values.model}%0AУслуги: ${values.services}; `
    );
  };

  // Добавление записи в firestore
  const setAppointments = async (value: any) => {
    await addDoc(apointColectionRef, {
      phone: user ? value.phone : "+7" + value.phone,
      date: value.date,
      start: value.start,
      end: value.end,
      brand: value.brand,
      model: value.model,
      name: value.name,
      amount: totalSum,
      services: cartData,
      status: "Заявка принята",
    });
  };

  return (
    <OrderWrapper>
      <FormSteps step={step} setStep={setStep} formik={formik}>
        <FormStepOne formik={formik} setStep={setStep} />
        <FormStepTwo formik={formik} setStep={setStep} />
        <FormStepThree formik={formik} />
      </FormSteps>
    </OrderWrapper>
  );
};

export default Order;
