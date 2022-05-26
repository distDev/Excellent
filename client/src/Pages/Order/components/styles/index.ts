import styled from 'styled-components/macro';

interface IProps {
  variant?: 'active' | null;
}

interface IButton {
  variant?: 'successfully' | null;
}

export const OrderWrapper = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    height: auto;
  }
`;

export const FormItem = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;
  }
`;
export const FormButtons = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    bottom: 69px;
    left: 15px;
    width: calc(100% - 30px);
  }
`;

export const FormButton = styled.button<IButton>`
  @media screen and (max-width: 479px) {
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { colors }, variant }) =>
      variant === 'successfully' ? colors.primary : colors.textMain};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: 500;
  }
`;

export const FormAddCarButton = styled(FormButton)`
  @media screen and (max-width: 479px) {
    background: ${({ theme: { background } }) => background.button};
    color: ${({ theme: { colors } }) => colors.textSecond};
  }
`;

export const FormHoursBox = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const FormHour = styled.div<IProps>`
  @media screen and (max-width: 479px) {
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
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 70px;
    margin-bottom: 50px;
  }
`;

export const FormCheckboxContainer = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const FormCheckboxItem = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    gap: 10px;

    input:checked {
      background: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;

export const FormSubmitButtom = styled.button`
  @media screen and (max-width: 479px) {
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
