import React from 'react';
import Input from '../../../../Components/uiComponents/input/index';
import Container from '../../../../Components/uiComponents/container/index';
import Select from '../../../../Components/uiComponents/select/index';
import { FormItem } from '../styles';

type Props = {};

const FormStepOne = (props: Props) => {
  return (
    <Container>
      <FormItem>
        <Select>
          <option value='1'>Автомобиль</option>
          <option value='1'>Remo</option>
        </Select>
        <Select>
          <option value='1'>Remo</option>
          <option value='1'>Remo</option>
          <option value='1'>Remo</option>
        </Select>
      </FormItem>
      <FormItem>
        <Input placeholder='Имя' />
        <Input placeholder='Имя' />
      </FormItem>
    </Container>
  );
};

export default FormStepOne;
