import Login from './login';
import { AuthContainer, AuthContent, AuthTitle } from './styles/auth';

type Props = {};

const Auth = (props: Props) => {
  return (
    <AuthContainer>
      <AuthTitle>Авторизация</AuthTitle>
      <AuthContent>
        <Login />
      </AuthContent>
    </AuthContainer>
  );
};

export default Auth;
