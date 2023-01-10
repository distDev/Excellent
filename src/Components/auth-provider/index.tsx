import { FC, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { authentication } from '../../Firebase/firebase-config';

import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { loginUser } from '../../Store/slices/user-slice';
import Loader from '../loader';

const AuthProvider: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const [pending, setPending] = useState(true);

  // проверка на авторизацию пользователя в firebase
  // если авторизован, то данные отправляются в store
  useEffect(() => {
    const checkAuth = () => {
      authentication.onAuthStateChanged((user) => {
        if (user) {
          dispatch(
            loginUser({
              id: user.uid,
              phoneNumber: user.phoneNumber,
              name: user.displayName,
            })
          );
          setPending(false);
        } else {
          console.log('пользователь не авторизован');
          setPending(false);
        }
      });
    };

    checkAuth();
  }, []);

  if (pending) {
    return (
      <PendingContainer>
        <Loader />
      </PendingContainer>
    );
  }
  return <>{children}</>;
};

export default AuthProvider;

const PendingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
