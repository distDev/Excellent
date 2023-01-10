import { FC, useState } from 'react';
import { Input } from '../../../../../../Components/ui-components/input/index';
import CarSelects from '../../../../../../Components/car-selects/index';
import { Text } from '../../../../../../Components/ui-components/text';
import { FormItem } from '../../../styles/index';
import NumberFormat from 'react-number-format';

type Props = {
  formik: any;
};

const FormNormalUser: FC<Props> = ({ formik }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  console.log(formik.values);

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

        <NumberFormat
          customInput={Input}
          name='phone'
          placeholder='Номер телефона'
          onBlur={formik.handleBlur}
          value={phoneNumber}
          onValueChange={(values) => {
            const { value } = values;
            setPhoneNumber(value);
            formik.setFieldValue('phone', value);
          }}
          format='+7 (###) ###-####'
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
