import React, { FC } from 'react';
import FormStepper from '../formStepper/index';
import { FormStepsContainer } from './styles/formSteps';

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  formik: any;
}

const FormSteps: FC<Props> = ({ children, formik, step, setStep }) => {
  // делаю массив из потомков
  const childArray = React.Children.toArray(children);

  // нахожу в массиве текущего потомка, который будет на экране
  const currentChild = childArray[step];

  return (
    <FormStepsContainer onSubmit={formik.handleSubmit}>
      <FormStepper step={step} />
      {currentChild}
    </FormStepsContainer>
  );
};

export default FormSteps;
