import { FC } from 'react';
import { useAppSelector } from '../../State/store';
import ModalMedium from '../modalMedium';
import Login from './login';
import { AuthContainer, AuthContent, AuthTitle } from './styles/auth';

type Props = {
 
};

const Auth: FC<Props> = () => {
  const showAuthModal = useAppSelector((state) => state.modal.authModal.isOpen)

  return (
    <ModalMedium show={showAuthModal}>
      <AuthContainer>
        <AuthTitle>Авторизация</AuthTitle>
        <AuthContent>
          <Login />
        </AuthContent>
      </AuthContainer>
    </ModalMedium>
  );
};

export default Auth;
