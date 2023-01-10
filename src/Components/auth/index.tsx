import { FC } from 'react';
import { useAppSelector } from '../../Hooks/useAppSelector';
import ModalMedium from '../modal-medium';
import Login from './login';
import styled from 'styled-components/macro';

type Props = {};

const Auth: FC<Props> = () => {
  const showAuthModal = useAppSelector((state) => state.modal.authModal.isOpen);

  return (
    <ModalMedium show={showAuthModal}>
      <AuthContainer>
        <AuthContent>
          <Login />
        </AuthContent>
      </AuthContainer>
    </ModalMedium>
  );
};

export default Auth;

const AuthContainer = styled.div`
  height: 100%;
`;

const AuthContent = styled.div`
  width: 100%;
  height: 100%;
`;

const AuthTitle = styled.h3`
  font-size: ${({ theme: { size } }) => size.title.normal};
  color: ${({ theme: { colors } }) => colors.textMain};
  font-weight: 600;
`;
