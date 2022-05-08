import { FC } from 'react';
import { ModalInput } from '../../modal/styles/modal';
import {LoginBottom, LoginButton, LoginContainer, LoginText, LoginTop} from './styles/login';

type Props = {
  seActiveTab: React.Dispatch<
    React.SetStateAction<'Авторизация' | 'Регистрация'>
  >;
};

const Login: FC<Props> = ({seActiveTab}) => {
  return (
    <LoginContainer>
      <LoginTop>
        <ModalInput placeholder='Номер телефона' />
      </LoginTop>
      <LoginBottom>
        <LoginButton>Войти</LoginButton>
        <LoginText onClick={() => seActiveTab('Регистрация')}>
          Нет профиля? <span>Регистрация</span>
        </LoginText>
      </LoginBottom>
    </LoginContainer>
  );
};

export default Login;
