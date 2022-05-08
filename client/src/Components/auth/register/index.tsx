import { FC } from 'react';
import { ModalInput } from '../../modal/styles/modal';
import {
  LoginBottom,
  LoginButton,
  LoginContainer,
  LoginText,
  LoginTop,
} from '../login/styles/login';

type Props = {
  seActiveTab: React.Dispatch<
    React.SetStateAction<'Авторизация' | 'Регистрация'>
  >;
};

const Register: FC<Props> = ({ seActiveTab }) => {
  return (
    <LoginContainer>
      <LoginTop>
        <ModalInput placeholder='Номер телефона' />
        <ModalInput placeholder='Имя' />
      </LoginTop>
      <LoginBottom>
        <LoginButton>Зарегистрироваться</LoginButton>
        <LoginText onClick={() => seActiveTab('Авторизация')}>
          Есть профиль? <span>Авторизация</span>
        </LoginText>
      </LoginBottom>
    </LoginContainer>
  );
};

export default Register;
