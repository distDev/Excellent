import React, { FC } from 'react';
import { Text } from '../../../../Components/uiComponents/text';
import { FormStepperContainer } from './styles';

interface Props {
  step: number;
}

const FormStepper: FC<Props> = ({ step }) => {
  const StepperData = [
    {
      name: 'Информация',
    },
    {
      name: 'Дата',
    },
    {
      name: 'Итого',
    },
  ];

  return (
    <FormStepperContainer>
      <Text></Text>
      {/* <FormStepperProgress>

      </FormStepperProgress> */}
    </FormStepperContainer>
  );
};

export default FormStepper;
