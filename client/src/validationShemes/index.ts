import * as Yup from 'yup';

export const orderFormValidation = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Слишком короткий!!')
    .max(50, 'Слишком длинный!!')
    .required('Required'),
  phone: Yup.string()
    .min(10, 'Слишком короткий!!')
    .max(11, 'Слишком длинный!!')
    .required('Required'),
  brand: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  model: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  date: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  time: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
