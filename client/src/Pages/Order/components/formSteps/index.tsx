import React, { FC } from 'react';
import FormStepper from '../formStepper/index';

interface Props {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const FormSteps: FC<Props> = ({ children, step, setStep }) => {
  // делаю массив из потомков
  const childArray = React.Children.toArray(children);

  // нахожу в массиве текущего потомка, который будет на экране
  const currentChild = childArray[step];

  return (
    <form>
      <FormStepper step={step} />
      {currentChild}
    </form>
  );
};

export default FormSteps;
