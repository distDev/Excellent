import axios from "axios";
import styled from "styled-components/macro";
import ConsultCarPicker from "../consult-content/consult-car-picker";
import ConsultInfo from "../consult-content/consult-info";
import ConsultProblem from "../consult-content/consult-problem";
import { useFormik } from "formik";
import { consultFormValidation } from "../../../ValidationShemes";
import { Title } from "../../ui-components/title";
import { useAppDispatch } from "../../../Hooks/useAppDispatch";
import {
  switchConsultModalView,
  switchConsultSuccessStatus,
} from "../../../Store/slices/modal-slice";
import { useAppSelector } from "../../../Hooks/useAppSelector";

type Props = {};

const ConsultContent = (props: Props) => {
  const isOrderSuccess = useAppSelector(
    (state) => state.modal.consulModal.isSuccess
  );
  const dispatch = useAppDispatch();

  // Конфиг formik
  const formik = useFormik({
    initialValues: {
      brand: "",
      model: "",
      phone: "",
      name: "",
      problem: "",
    },
    validationSchema: consultFormValidation,
    onSubmit: (values) => {
      tgMessage(values);
      dispatch(switchConsultSuccessStatus());
    },
  });

  // Отправка заявки в телеграм
  const tgMessage = async (values: any) => {
    await axios.post(
      `https://api.telegram.org/bot${process.env.REACT_APP_TG_TOKKEN}/sendMessage?chat_id=${process.env.REACT_APP_TG_CHAT_ID}&text=Тип заявки: Консультация 
      %0AИмя: ${values.name}
      %0AНомер: ${values.phone}
      %0AМарка: ${values.brand}
      %0AМодель: ${values.model}
      %0AПроблема: ${values.problem}`
    );
  };

  // Проверка валидности перед отправкой
  const checkValid =
    formik.values.brand.length > 0 &&
    formik.values.model.length > 0 &&
    formik.values.phone.length > 0 &&
    formik.values.name.length > 0 &&
    formik.values.problem.length > 0 &&
    formik.isValid;

  const handleClose = () => {
    dispatch(switchConsultModalView());
    dispatch(switchConsultSuccessStatus());
  };



  return (
    <ConsultContentContainer>
      {!isOrderSuccess && (
        <>
          <Title variant="medium" color="textMain">
            Запись на консультацию
          </Title>
          <form onSubmit={formik.handleSubmit}>
            <ConsultCarPicker formik={formik} />
            <ConsultInfo formik={formik} />
            <ConsultProblem formik={formik} />
            <div className="consult-submit-btn">
              <ConsultButton
                type="submit"
                disabled={checkValid ? false : true}
                variant={checkValid ? "successfully" : null}
              >
                Записаться
              </ConsultButton>
            </div>
          </form>
        </>
      )}

      {isOrderSuccess && (
        <div className="order-success">
          <div className="order-success-box">
            <div>
              <div className="order-success-img">
                <img src="/success.svg" alt="success" />
              </div>
              <div className="order-success-text">
                <Title variant="medium" color="textMain">
                  Заявка успешно отправлена!
                </Title>
              </div>
            </div>
            <div className="order-success-btn">
              <button onClick={handleClose}>Отлично</button>
            </div>
          </div>
        </div>
      )}
    </ConsultContentContainer>
  );
};

export default ConsultContent;

interface IButton {
  variant?: "successfully" | null;
}

const ConsultContentContainer = styled.div`
  padding: 0 40px;
  height: 100%;

  form {
    margin: 50px 0 30px 0;
    display: grid;
    gap: 30px;
  }

  .consult-submit-btn {
    width: 50%;
    margin: 0px auto;
    margin-top: 50px;
  }

  .order-success {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .order-success-box {
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .order-success-img {
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
  }
  .order-success-btn {
    button {
      color: ${({ theme: { colors } }) => colors.white};
      background: ${({ theme: { colors } }) => colors.primary};
      border: none;
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      padding: 20px 80px;
      border-radius: 10px;
      margin-top: 70px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0 15px;

    form {
      margin: 50px 0 30px 0;
      display: grid;
      gap: 40px;
    }
    .consult-submit-btn {
      width: 100%;
      margin: 0px auto;
      margin-top: 50px;
    }
  }
  @media (min-width: 320px) and (max-width: 390px) {
    .form {
      margin: 50px 0 30px 0;
      display: grid;
      gap: 40px;
    }
  }
`;

const ConsultButton = styled.button<IButton>`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  opacity: ${({ variant }) => (variant === "successfully" ? "1" : "0.4")};
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
    opacity: ${({ variant }) => (variant === "successfully" ? "1" : "0.4")};
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
    opacity: ${({ variant }) => (variant === "successfully" ? "1" : "0.4")};
    font-weight: 500;
  }
`;
