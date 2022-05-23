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
        <CarSelects
          brandValue={formik.values.brand}
          brandChange={formik.handleChange}
          modeldValue={formik.values.model}
          modelChange={formik.handleChange}
        />
      </FormItem>
      <FormItem>
        <Text color='textSecond'>Данные для связи</Text>
        <Input
          type='text'
          placeholder='Имя'
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <Input
          type='number'
          placeholder='Телефон'
          name='phone'
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
      </FormItem>
    </>
  );
};

export default FormNormalUser;
