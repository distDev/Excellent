import { FC, useState } from 'react';
import { ModalInput } from '../../modal/styles/modal';
import { Title } from '../../uiComponents/title';
import { authentication } from '../../../Firebase/firebase-config';

import {
  LoginBottom,
  LoginButton,
  LoginContainer,
  LoginTop,
} from './styles/login';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useAppDispatch } from '../../../State/store';
import { loginUser } from '../../../State/action-creators';
import { useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE } from '../../../Utils/routerConst';

type Props = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

const Login: FC<Props> = ({ setShow }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [OTP, setOTP] = useState('');
  const [activeTab, setActiveTab] = useState<'login' | 'verify'>('login');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      'request-otp-btn',
      {
        size: 'invisible',
        callback: (response: any) => {},
      },
      authentication
    );
  };

  // отправка смс с кодом
  const requestOTP = () => {
    if (phoneNumber.length < 12) {
      return;
    }
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => console.log(error));

    setTimeout(() => {
      setActiveTab('verify');
    }, 2000);
  };

  // проверка кода
  const verifyOTP = () => {
    if (OTP.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(OTP)
        .then((result: any) => {
          // отправка данных в стор
          dispatch(
            loginUser(
              result.user.uid,
              result.user.phoneNumber,
              result.user.displayName
            )
          );
          setShow(false);
          navigate(PROFILE_ROUTE);
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  };

  return (
    <LoginContainer>
      {activeTab === 'login' && (
        <>
          <LoginTop>
            <ModalInput
              placeholder='Номер телефона'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </LoginTop>
          <LoginBottom>
            <LoginButton id='request-otp-btn' onClick={requestOTP}>
              Получить код
            </LoginButton>
          </LoginBottom>
        </>
      )}
      {activeTab === 'verify' && (
        <>
          <LoginTop>
            <ModalInput
              placeholder='Код из смс'
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
            />
          </LoginTop>
          <LoginBottom>
            <LoginButton onClick={verifyOTP}>Проверить код</LoginButton>
          </LoginBottom>
        </>
      )}
    </LoginContainer>
  );
};

export default Login;
