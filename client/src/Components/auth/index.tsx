import { FC } from 'react';
import Login from './login';
import { AuthContainer, AuthContent, AuthTitle } from './styles/auth';

type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Auth: FC<Props> = ({ setShow }) => {
  return (
    <AuthContainer>
      <AuthTitle>Авторизация</AuthTitle>
      <AuthContent>
        <Login setShow={setShow} />
      </AuthContent>
    </AuthContainer>
  );
};

export default Auth;
