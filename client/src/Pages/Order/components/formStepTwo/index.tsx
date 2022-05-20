import React, { FC, useState } from 'react';
import { Container } from '../../../../Components/uiComponents/container';
import { Input } from '../../../../Components/uiComponents/input';
import { Text } from '../../../../Components/uiComponents/text';
import {
  FormButton,
  FormButtons,
  FormHour,
  FormHoursBox,
  FormItem,
} from '../styles';
import { hoursData } from '../../utils/formData';

type Props = {
  formik: any;
  setHours: React.Dispatch<React.SetStateAction<string>>;
};

const FormStepTwo: FC<Props> = ({ formik, setHours }) => {
  const [selectedHour, setSelectedHour] = useState('');

  // выбранное время
  const handleSelect = (id: string, hour: string): void => {
    if (hoursData.filter((e) => e.id === id)) {
      setSelectedHour(id);
      formik.setFieldValue('time', hour);
    }
    return;
  };

  return (
    <Container>
      <FormItem>
        <Text color='textSecond'>Выберите день</Text>
        <Input
          placeholder='Имя'
          type='date'
          name='date'
          value={formik.values.date}
          onChange={formik.handleChange}
        />
      </FormItem>
      <FormItem>
        <Text color='textSecond'>Выберите час</Text>
        <FormHoursBox>
          {hoursData.map((e) => (
            <FormHour
              key={e.id}
              onClick={() => handleSelect(e.id, e.hour)}
              variant={selectedHour === e.id ? 'active' : null}
            >
              <Text color={selectedHour === e.id ? 'textMain' : 'textSecond'}>
                {e.hour}
              </Text>
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
