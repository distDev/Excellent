import React, { FC, useEffect, useState } from 'react';
import { authentication } from '../../Firebase/firebase-config';
import { loginUser } from '../../State/action-creators';
import { useAppDispatch } from '../../State/store';

const AuthProvider: FC = ({ children }) => {
  const dispatch = useAppDispatch();

  // проверка на авторизацию пользователя в firebase
  // если авторизован, то данные отправляются в store
  useEffect(() => {
    authentication.onAuthStateChanged((user) => {
      if (user) {
        dispatch(loginUser(user.uid, user.phoneNumber));
      } else {
        console.log('пользователь не авторизован');
      }
    });
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
