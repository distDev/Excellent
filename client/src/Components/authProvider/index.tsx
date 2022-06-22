import React, { FC, useEffect, useState } from 'react';
import { authentication } from '../../Firebase/firebase-config';
import { loginUser } from '../../State/action-creators';
import { useAppDispatch } from '../../State/store';

const AuthProvider: FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const [pending, setPending] = useState(true);

  // проверка на авторизацию пользователя в firebase
  // если авторизован, то данные отправляются в store
  useEffect(() => {
    const checkAuth = () => {
      authentication.onAuthStateChanged((user) => {
        if (user) {
          dispatch(loginUser(user.uid, user.phoneNumber));
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
    return <>Загрузка...</>;
  }
  return <>{children}</>;
};

export default AuthProvider;
