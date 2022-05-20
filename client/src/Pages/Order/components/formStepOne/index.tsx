import React, { FC, useState } from 'react';
import {Input} from '../../../../Components/uiComponents/input/index';
import { Container } from '../../../../Components/uiComponents/container/index';
import {Select} from '../../../../Components/uiComponents/select/index';
import { FormAddCarButton, FormButton, FormButtons, FormItem } from '../styles';
import { Text } from '../../../../Components/uiComponents/text';

type Props = {
  formik: any;
};

const FormStepOne: FC<Props> = ({formik}) => {
  const auth = false;

  const [addCar, setAddCar] = useState(false);

  return (
    <Container>
      {auth ? (
        <>
          <FormItem>
            <Text color='textSecond'>Выберите автомобиль</Text>
            <Select
              name='brand'
              value={formik.values.brand}
              onChange={formik.handleChange}
            >
              <option value='Марка'>Марка</option>
              <option value='Reno'>Renault</option>
            </Select>
            <Select
              name='model'
              value={formik.values.model}
              onChange={formik.handleChange}
            >
              <option value='Модель'>Модель</option>
              <option value='Logan'>Logan</option>
              <option value='Arkana'>Arkana</option>
              <option value='Daster'>Daster</option>
            </Select>
          </FormItem>
        </>
      ) : (
        <>
          <FormItem>
            <Text color='textSecond'>Выберите автомобиль</Text>
            <Select
              name='brand'
              value={formik.values.brand}
              onChange={formik.handleChange}
            >
              <option value='Марка'>Марка</option>
              <option value='Reno'>Renault</option>
            </Select>
            <Select
              name='model'
              value={formik.values.model}
              onChange={formik.handleChange}
            >
              <option value='Модель'>Модель</option>
              <option value='Logan'>Logan</option>
              <option value='Arkana'>Arkana</option>
              <option value='Daster'>Daster</option>
            </Select>
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
      )}
      <FormButtons>
        {auth && (
          <FormAddCarButton type='button'>Добавить автомобиль</FormAddCarButton>
        )}
        <FormButton type='submit'>Далее</FormButton>
      </FormButtons>
    </Container>
  );
};

export default FormStepOne;
