import React, { FC, useState } from 'react';
import moment from 'moment';
import 'moment/locale/ru';
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
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const FormStepTwo: FC<Props> = ({ formik, setHours, setStep }) => {
  const [selectedHour, setSelectedHour] = useState('');

  // выбранное время
  const handleSelect = (id: string, hour: string): void => {
    setSelectedHour(id);
    formik.setFieldValue('time', hour);
  };

  // проверка валидности формы для дальнейшего шага
  const checkValid =
    formik.values.name.length > 0 &&
    formik.values.time.length > 0 &&
    formik.isValid;

  return (
    <Container>
      <FormItem>
        <Text color='textSecond'>Выберите день</Text>
        <Input
          type='date'
          name='date'
          {...formik.getFieldProps('date')}
          variant={
            formik.touched.date && formik.errors.date
              ? 'error'
              : formik.touched.date && !formik.errors.date
              ? 'complited'
              : null
          }
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
        <FormButton
          type='button'
          disabled={checkValid ? false : true}
          onClick={() => setStep((s) => s + 1)}
          variant={checkValid ? 'successfully' : null}
        >
          Далее
        </FormButton>
      </FormButtons>
    </Container>
  );
};

export default FormStepTwo;
