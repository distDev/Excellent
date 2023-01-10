import * as Yup from 'yup';

export const orderFormValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Слишком короткий!!')
    .max(50, 'Слишком длинный!!')
    .required('Обязательное поле'),
  phone: Yup.string()
    .min(10, 'Слишком короткий номер!')
    .required('Обязательное поле'),
  brand: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Обязательное поле'),
  model: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Обязательное поле'),
  date: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Обязательное поле'),
});

export const addCarValidation = Yup.object().shape({
  brand: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Обязательное поле'),
  model: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Обязательное поле'),
  vin: Yup.string()
    .min(17, 'Слишком короткий!!')
    .max(17, 'Слишком длинный!!')
    .required('Обязательное поле'),
  year: Yup.number(),
  milleage: Yup.number(),
});
