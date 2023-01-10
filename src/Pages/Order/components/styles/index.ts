import styled from 'styled-components/macro';

interface IProps {
  variant?: 'active' | null;
}

interface IButton {
  variant?: 'successfully' | null;
}


export const OrderWrapper = styled.div`
  width: 680px;
  height: auto;
  margin: 0px auto;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }
`;

export const FormItem = styled.div`
  width: 100%;
  display: grid;
  gap: 15px;
  margin-bottom: 50px;

  @media screen and (max-width: 480px) {
    width: 100%;
    display: grid;
    gap: 15px;
    margin-bottom: 50px;
  }
`;
export const FormButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  position: fixed;
  bottom: 50px;
  width: 100%;
  left: 0;

  @media screen and (max-width: 480px) {
    display: grid;
    gap: 20px;
    position: relative;
    margin-top: 120px;
    width: 100%;
  }

  @media (min-width: 320px) and (max-width: 380px) {
    display: grid;
    gap: 10px;
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

export const FormButton = styled.button<IButton>`
  width: 25%;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  opacity: ${({ variant }) => (variant === 'successfully' ? '1' : '0.4')};
  font-weight: 500;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    opacity: ${({ variant }) => (variant === 'successfully' ? '1' : '0.4')};
    font-weight: 500;
  }

  @media (min-width: 320px) and (max-width: 380px) {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { colors } }) => colors.primary};
    color: ${({ theme: { colors } }) => colors.white};
    opacity: ${({ variant }) => (variant === 'successfully' ? '1' : '0.4')};
    font-weight: 500;
  }
`;

export const FormAddCarButton = styled(FormButton)`
  background: ${({ theme: { background } }) => background.button};
  color: ${({ theme: { colors } }) => colors.textMain};
  cursor: pointer;

  @media screen and (max-width: 480px) {
    background: ${({ theme: { background } }) => background.button};
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

export const FormHoursBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const FormHour = styled.div<IProps>`
  background: ${({ theme: { background }, variant }) =>
    variant === 'active' ? background.white : background.secondBg};
  color: ${({ theme: { colors }, variant }) =>
    variant === 'active' ? colors.textMain : colors.textSecond};
  box-shadow: ${({ theme: { colors }, variant }) =>
    variant === 'active' ? `0px 0px 0px 1px ${colors.textSecond}` : 'none'};
  text-align: center;
  padding: 20px 0px;
  border-radius: 10px;

  @media screen and (max-width: 480px) {
    background: ${({ theme: { background }, variant }) =>
      variant === 'active' ? background.white : background.secondBg};
    color: ${({ theme: { colors }, variant }) =>
      variant === 'active' ? colors.textMain : colors.textSecond};
    box-shadow: ${({ theme: { colors }, variant }) =>
      variant === 'active' ? `0px 0px 0px 1px ${colors.textSecond}` : 'none'};
    text-align: center;
    padding: 20px 0px;
    border-radius: 10px;
  }
`;

export const FormSubmit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 70px;
  margin-bottom: 50px;

  .option-wrapper {
    margin-bottom: 10px;
  }

  .form-checkbox {
    position: relative;
    display: flex;
    flex-direction: column;

    input[type='checkbox'] {
      position: absolute;
      z-index: -1;
      opacity: 0;
      + label {
        display: inline-flex;
        cursor: pointer;
        align-items: center;
        user-select: none;
        // Unchecked checkbox box border
        &::before {
          content: '';
          display: inline-block;
          width: 1em;
          height: 1em;
          flex-shrink: 0;
          flex-grow: 0;
          border: 1px solid ${({ theme: { colors } }) => colors.textSecond};
          border-radius: 0.25em;
          margin-right: 0.5em;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 60% 60%;
        }
      }

      // Checked checkbox box border
      &:checked + label {
        &::before {
          border-color: ${({ theme: { colors } }) => colors.primary};
          background-color: ${({ theme: { colors } }) => colors.primary};
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    display: grid;
    gap: 30px;
    margin-top: 70px;
    margin-bottom: 50px;
  }
`;

export const FormCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 480px) {
    display: grid;
    gap: 10px;
  }
`;

export const FormCheckboxItem = styled.div`
  @media screen and (max-width: 480px) {
    display: grid;
    gap: 10px;

    input:checked {
      background: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;

export const FormSubmitButtom = styled.button<IButton>`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { background } }) => background.primary};
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  opacity: ${({ variant }) => (variant === 'successfully' ? '1' : '0.4')};

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { background } }) => background.primary};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: 500;
    text-align: center;
  }
`;
