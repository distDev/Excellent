import React, { FC } from 'react';
import { RiCheckFill } from 'react-icons/ri';
import { Text } from '../../../../Components/ui-components/text';
import styled from 'styled-components/macro';

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

const FormStepperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
`;

const FormStepperProgress = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;

  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;

    justify-content: center;
    margin-top: 15px;
  }
`;

const FormStep = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  margin: 0px;
  padding: 0px;
  margin-right: 10px;

  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${({ theme: { colors } }) => colors.border};
    margin-right: 10px;
    padding: 0px;
  }
`;

const CompletedStep = styled(FormStep)`
  background: ${({ theme: { background } }) => background.primary};
  color: ${({ theme: { colors } }) => colors.white};
  border: none;

  svg {
    width: 80%;
    height: 80%;
  }

  @media screen and (max-width: 480px) {
    background: ${({ theme: { background } }) => background.primary};
    color: ${({ theme: { colors } }) => colors.white};
    border: none;

    svg {
      width: 80%;
      height: 80%;
    }
  }
`;

const CurrentStep = styled(FormStep)`
  border: 1px solid ${({ theme: { colors } }) => colors.primary};

  div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme: { background } }) => background.primary};
    margin: 0px;
    padding: 0px;
  }

  @media screen and (max-width: 480px) {
    border: 1px solid ${({ theme: { colors } }) => colors.primary};

    div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: ${({ theme: { background } }) => background.primary};
      margin: 0px;
      padding: 0px;
    }
  }
`;
