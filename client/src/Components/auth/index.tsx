import React, { useState } from 'react';
import Login from './login';
import Register from './register';
import { AuthContainer, AuthContent, AuthTitle } from './styles/auth';

type Props = {};

const Auth = (props: Props) => {
  const [activeTab, seActiveTab] = useState<'Авторизация' | 'Регистрация'>(
    'Авторизация'
  );
  return (
    <AuthContainer>
      <AuthTitle>{activeTab}</AuthTitle>
      <AuthContent>
        {activeTab === 'Авторизация' ? (
          <Login seActiveTab={seActiveTab} />
        ) : (
          <Register seActiveTab={seActiveTab} />
        )}
      </AuthContent>
    </AuthContainer>
  );
};

export default Auth;
