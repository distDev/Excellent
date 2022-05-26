import { FC } from 'react';
import { Input } from '../../../../../Components/uiComponents/input/index';
import CarSelects from '../../../../../Components/carSelects/index';
import { Text } from '../../../../../Components/uiComponents/text';
import { FormItem } from '../../styles/index';

type Props = {
  formik: any;
};

const FormNormalUser: FC<Props> = ({ formik }) => {
  return (
    <>
      <FormItem>
        <Text color='textSecond'>Выберите автомобиль</Text>
        <CarSelects formik={formik} />
      </FormItem>
      <FormItem>
        <Text color='textSecond'>Данные для связи</Text>
        <Input
          type='text'
          placeholder='Имя'
          name='name'
          variant={
            formik.touched.name && formik.errors.name
              ? 'error'
              : formik.touched.name && !formik.errors.name
              ? 'complited'
              : null
          }
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <Text color='primary'>{formik.errors.name}</Text>
        )}
        <Input
          type='number'
          placeholder='Телефон'
          name='phone'
          {...formik.getFieldProps('phone')}
          variant={
            formik.touched.phone && formik.errors.phone
              ? 'error'
              : formik.touched.phone && !formik.errors.phone
              ? 'complited'
              : null
          }
        />
        {formik.touched.phone && formik.errors.phone && (
          <Text color='primary'>{formik.errors.phone}</Text>
        )}
      </FormItem>
    </>
  );
};

export default FormNormalUser;
