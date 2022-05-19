import React, { useState } from 'react';
import Input from '../../../../Components/uiComponents/input/index';
import { Container } from '../../../../Components/uiComponents/container/index';
import Select from '../../../../Components/uiComponents/select/index';
import { FormAddCarButton, FormButton, FormButtons, FormItem } from '../styles';
import { Text } from '../../../../Components/uiComponents/text';

type Props = {};

const FormStepOne = (props: Props) => {
  const auth = false;

  const [addCar, setAddCar] = useState(false);

  return (
    <Container>
      {auth ? (
        <>
          <FormItem>
            <Text color='textSecond'>Выберите автомобиль</Text>
            <Select>
              <option value='1'>Марка</option>
              <option value='1'>Remo</option>
            </Select>
            <Select>
              <option value='1'>Модель</option>
              <option value='1'>Remo</option>
              <option value='1'>Remo</option>
            </Select>
          </FormItem>
        
        </>
      ) : (
        <>
          <FormItem>
            <Text color='textSecond'>Выберите автомобиль</Text>
            <Select>
              <option value='1'>Марка</option>
              <option value='1'>Remo</option>
            </Select>
            <Select>
              <option value='1'>Модель</option>
              <option value='1'>Remo</option>
              <option value='1'>Remo</option>
            </Select>
          </FormItem>
          <FormItem>
            <Text color='textSecond'>Данные для связи</Text>
            <Input type='text' placeholder='Имя' />
            <Input type='number' placeholder='Телефон' />
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
