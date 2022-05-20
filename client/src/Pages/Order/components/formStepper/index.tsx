import React, { FC } from 'react';
import { RiCheckFill } from 'react-icons/ri';
import { Text } from '../../../../Components/uiComponents/text';

import {
  CompletedStep,
  CurrentStep,
  FormStep,
  FormStepperContainer,
  FormStepperProgress,
} from './styles';

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

  const currentStep = StepperData[step];

  return (
    <FormStepperContainer>
      <Text>{currentStep.name}</Text>
      <FormStepperProgress>
        {StepperData.map((e, i) =>
          i < step ? (
            <CompletedStep key={e.name}>
              <RiCheckFill />
            </CompletedStep>
          ) : i === step ? (
            <CurrentStep key={e.name}>
              <div></div>
            </CurrentStep>
          ) : (
            <FormStep key={e.name} />
          )
        )}
      </FormStepperProgress>
    </FormStepperContainer>
  );
};

export default FormStepper;
