import React from 'react';
import { Container } from '../../../../Components/uiComponents/container';
import Input from '../../../../Components/uiComponents/input';
import { Text } from '../../../../Components/uiComponents/text';
import {
  FormButton,
  FormButtons,
  FormHour,
  FormHoursBox,
  FormItem,
} from '../styles';
import { hoursData } from '../../utils/formData';

type Props = {};

const FormStepTwo = (props: Props) => {
  return (
    <Container>
      <FormItem>
        <Text color='textSecond'>Выберите день</Text>
        <Input placeholder='Имя' type='date' />
      </FormItem>
      <FormItem>
        <Text color='textSecond'>Выберите час</Text>
        <FormHoursBox>
          {hoursData.map((e) => (
            <FormHour key={e.id}>
              <Text color='textSecond'>{e.hour}</Text>
            </FormHour>
          ))}
        </FormHoursBox>
      </FormItem>
      <FormButtons>
        <FormButton type='submit'>Далее</FormButton>
      </FormButtons>
    </Container>
  );
};

export default FormStepTwo;
