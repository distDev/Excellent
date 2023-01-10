import React, { FC, useState } from 'react';
import { Container } from '../../../../../Components/ui-components/container';
import { Input } from '../../../../../Components/ui-components/input';
import { Text } from '../../../../../Components/ui-components/text';
import {
  FormButton,
  FormButtons,
  FormHour,
  FormHoursBox,
  FormItem,
} from '../../styles';
import { hoursData } from '../../../utils/formData';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../../Firebase/firebase-config';

type Props = {
  formik: any;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const FormStepTwo: FC<Props> = ({ formik, setStep }) => {
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [freeHours, setFreeHours] = useState<any>();
  let currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, '-');

  const handleChangeHours = (id: string, start: string, end: string): void => {
    setSelectedHour(id);
    formik.setFieldValue('start', start);
    formik.setFieldValue('end', end);
  };

  // получение записей с firebase
  const fetchFreeTime = async (date: string) => {
    // получение всех записей на выбранный день
    const carsCollectionRef = query(
      collection(db, 'appointments'),
      where('date', '==', date)
    );
    const data = await getDocs(carsCollectionRef);
    const initialData: any = data?.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    // фильтрация свободных мест
    const filteredHours = hoursData.filter(
      ({ start }) => !initialData.some((item: any) => item.start === start)
    );

    setFreeHours(filteredHours);
  };

  // получение даты с инпута и запрос свободных мест
  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('date', e.target.value);
    setSelectedDay(e.target.value);
    fetchFreeTime(e.target.value);
  };

  // проверка формы
  const checkValid =
    formik.values.start.length > 0 &&
    formik.values.end.length > 0 &&
    formik.values.date.length > 0 &&
    formik.isValid;

  return (
    <Container>
      <FormItem>
        <Text color='textSecond'>Выберите день</Text>
        <Input
          type='date'
          name='date'
          min={currentDate}
          value={selectedDay}
          onBlur={formik.handleBlur}
          onChange={handleDayChange}
          variant={
            formik.touched.date && formik.errors.date
              ? 'error'
              : formik.touched.date && !formik.errors.date
              ? 'complited'
              : null
          }
        />
      </FormItem>
      {freeHours && (
        <FormItem>
          <Text color='textSecond'>Выберите час</Text>
          <FormHoursBox>
            {freeHours?.map((e: any) => (
              <FormHour
                key={e.id}
                onClick={() => handleChangeHours(e.id, e.start, e.end)}
                variant={selectedHour === e.id ? 'active' : null}
              >
                <Text color={selectedHour === e.id ? 'textMain' : 'textSecond'}>
                  {e.start} - {e.end}
                </Text>
              </FormHour>
            ))}
          </FormHoursBox>
        </FormItem>
      )}
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
