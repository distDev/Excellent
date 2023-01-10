import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

const OrderSucceess = () => {
  const navigate = useNavigate();

  return (
    <OrderSucceessWrapper>
      <div className='success__container'>
        <div className='success__img'>
          <img src='/success.svg' alt='' />
        </div>
        <div className='success__content'>
          <h3>
            Заявка успешно <br /> отправлена!
          </h3>
          <p>
            Вы можете следить за процессом работы в личном кабинете, достаточно
            авторизоваться по номеру телефона, который был указан при записи
          </p>
          <button onClick={() => navigate('/')}>Отлично</button>
        </div>
      </div>
    </OrderSucceessWrapper>
  );
};

export default OrderSucceess;

const OrderSucceessWrapper = styled.div`
  height: calc(100vh - 100px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .success__container {
    height: 70vh;
    width: 40%;
    padding: 0px 15px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    color: ${({ theme: { colors } }) => colors.textMain};
    margin-bottom: 30px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: ${({ theme: { colors } }) => colors.textSecond};
  }
  button {
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { colors } }) => colors.primary};
    border: none;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    padding: 20px 0;
    border-radius: 10px;
    margin-top: 70px;
  }
  @media screen and (max-width: 480px) {
    .success__container {
      height: 70vh;
      width: 100%;
      padding: 0px 15px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      color: ${({ theme: { colors } }) => colors.textMain};
      margin-bottom: 30px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      color: ${({ theme: { colors } }) => colors.textSecond};
    }
    button {
      color: ${({ theme: { colors } }) => colors.white};
      background: ${({ theme: { colors } }) => colors.primary};
      border: none;
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      padding: 20px 0;
      border-radius: 10px;
      margin-top: 70px;
    }
  }
  @media (min-width: 320px) and (max-width: 380px) {
    .success__container {
      height: 75vh;
      width: 100%;
      padding: 0px 15px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }
    button {
      color: ${({ theme: { colors } }) => colors.white};
      background: ${({ theme: { colors } }) => colors.primary};
      border: none;
      width: 100%;
      font-weight: 500;
      font-size: 16px;
      padding: 20px 0;
      border-radius: 10px;
      margin-top: 40px;
    }
    h3 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: ${({ theme: { colors } }) => colors.textMain};
      margin-bottom: 30px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 25px;
      color: ${({ theme: { colors } }) => colors.textSecond};
    }
  }
`;
