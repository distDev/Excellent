import styled from 'styled-components/macro';

export const FormStepperContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;

  @media screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 50px;
  }
`;

export const FormStepperProgress = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;

  @media screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;

export const FormStep = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid ${({ theme: { colors } }) => colors.border};
  margin: 0px;
  padding: 0px;

  @media screen and (max-width: 479px) {
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 1px solid ${({ theme: { colors } }) => colors.border};
    margin: 0px;
    padding: 0px;
  }
`;

export const CompletedStep = styled(FormStep)`
  background: ${({ theme: { background } }) => background.primary};
  color: ${({ theme: { colors } }) => colors.white};
  border: none;

  svg {
    width: 80%;
    height: 80%;
  }

  @media screen and (max-width: 479px) {
    background: ${({ theme: { background } }) => background.primary};
    color: ${({ theme: { colors } }) => colors.white};
    border: none;

    svg {
      width: 80%;
      height: 80%;
    }
  }
`;

export const CurrentStep = styled(FormStep)`
  border: 1px solid ${({ theme: { colors } }) => colors.primary};

  div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme: { background } }) => background.primary};
    margin: 0px;
    padding: 0px;
  }
  
  @media screen and (max-width: 479px) {
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
