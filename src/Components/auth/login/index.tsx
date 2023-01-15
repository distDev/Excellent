import { FC, useState } from 'react';

import styled from 'styled-components/macro';
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
} from 'firebase/auth';
import { useAppDispatch } from '../../../Hooks/useAppDispatch';
import { useNavigate } from 'react-router-dom';
import { routerConst } from '../../../Utils/routerConst';
import { Text } from '../../ui-components/text';
import NumberFormat from 'react-number-format';
import { pcView } from '../../../Utils/helperConst';
import { loginUser } from '../../../Store/slices/user-slice';
import { switchAuthModalView } from '../../../Store/slices/modal-slice';
import { authentication } from '../../../Firebase/firebase-config';
import { useLockBodyScroll } from '../../../Hooks/useLockBodyScroll';

declare global {
  interface Window {
    recaptchaVerifier: any;
    confirmationResult: any;
  }
}

const Login: FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [OTP, setOTP] = useState('');
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'login' | 'verify' | 'addName'>(
    'login'
  );

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
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    let newPhone = '+7' + phoneNumber;

    signInWithPhoneNumber(authentication, newPhone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setActiveTab('verify');
      })
      .catch((err) => console.log('Ошибка отправки смс'));
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
            loginUser({
              id: result.user.uid,
              phoneNumber: result.user.phoneNumber,
              name: result.user.displayName,
            })
          );

          if (result.user.displayName) {
            dispatch(switchAuthModalView());
            pcView &&
              navigate(`/profile/` + routerConst.PROFILE_SETTINGS_ROUTE);
            !pcView && navigate(routerConst.PROFILE_ROUTE);
          } else {
            setActiveTab('addName');
          }
        })
        .catch((error: any) => {
          console.log(error);
        });
    }
  };

  // добавление имени
  const handleAddName = () => {
    const user: any = authentication.currentUser;
    // изменение на сервере
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        dispatch(switchAuthModalView());
        navigate(routerConst.PROFILE_ROUTE);
      })
      .catch((error) => {
        console.log('Произошла ошибка при изменении профиля: ' + error);
      });
  };

  // блокировка скрола 
   useLockBodyScroll();

  return (
    <LoginContainer>
      {activeTab === 'login' && (
        <>
          <div>
            <LoginTitle>Войдите в Ex</LoginTitle>
            <LoginSubtitle>
              Вы сможете следить за процессом ремонта, добавлять автомобили и
              смотреть историю записей
            </LoginSubtitle>
          </div>
          <LoginContent>
            <LoginTop>
              <NumberFormat
                customInput={LoginInput}
                placeholder='Номер телефона'
                value={phoneNumber}
                onValueChange={(values) => {
                  const { value } = values;
                  setPhoneNumber(value);
                }}
                format='+7 (###) ###-####'
                data-cy='phone-input'
              />
            </LoginTop>
            <LoginBottom>
              <LoginButton
                id='request-otp-btn'
                data-cy='request-otp-btn'
                onClick={requestOTP}
                disabled={phoneNumber.length === 10 ? false : true}
              >
                Войти
              </LoginButton>
              <Text variant='extraSmall' color='textSecond'>
                Нажимая «Войти», вы соглашаетесь с политикой конфиденциальности
              </Text>
            </LoginBottom>
          </LoginContent>
        </>
      )}

      {activeTab === 'verify' && (
        <>
          <div>
            <LoginTitle>Введите код из смс</LoginTitle>
            <LoginSubtitle>
              Мы отправили его на ваш номер <br /> {'+7' + phoneNumber}
            </LoginSubtitle>
          </div>
          <LoginContent>
            <LoginTop>
              <NumberFormat
                customInput={LoginInput}
                placeholder='Секретный код'
                value={OTP}
                data-cy='otp-input'
                onValueChange={(values) => {
                  const { value } = values;
                  setOTP(value);
                }}
                format='# # # # # #'
              />
            </LoginTop>
            <LoginBottom>
              <LoginButton
                data-cy="verify-otp-btn"
                onClick={verifyOTP}
                disabled={OTP.length === 6 ? false : true}
              >
                Продолжить
              </LoginButton>
            </LoginBottom>
          </LoginContent>
        </>
      )}

      {activeTab === 'addName' && (
        <>
          <div>
            <LoginTitle>Как к вам обращаться?</LoginTitle>
            <LoginSubtitle>
              Это имя будет отображаться в личном кабинете и предстоящих записят
            </LoginSubtitle>
          </div>
          <LoginContent>
            <LoginTop>
              <LoginInput
                placeholder='Ваше имя'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </LoginTop>
            <LoginBottom>
              <LoginButton
                onClick={handleAddName}
                disabled={name.length > 3 ? false : true}
              >
                Продолжить
              </LoginButton>
            </LoginBottom>
          </LoginContent>
        </>
      )}
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginContent = styled.div`
  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  @media (min-width: 320px) and (max-width: 380px) {
    display: flex;
    height: 100%;
  }
`;

const LoginTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (max-width: 480px) {
    margin-top: 30px;
  }
`;

const LoginBottom = styled.div`
  width: 100%;
`;

const LoginTitle = styled.h3`
  font-size: 26px;
  margin-bottom: 10px;
  color: ${({ theme: { colors } }) => colors.textMain};

  @media screen and (max-width: 480px) {
    font-size: 27px;
  }
`;

const LoginSubtitle = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 25px;
  color: ${({ theme: { colors } }) => colors.textMain};

  @media screen and (max-width: 480px) {
  }
`;
const LoginInput = styled.input`
  border: 1px solid ${({ theme: { colors } }) => colors.textSecond};
  padding: 17px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { background } }) => background.white};
  color: ${({ theme: { colors } }) => colors.textMain};

  &:focus {
    &::placeholder {
      text-align: start;
    }
  }
  &::placeholder {
    text-align: center;
    color: ${({ theme: { colors } }) => colors.textSecond};
  }
  @media screen and (max-width: 480px) {
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 17px;
  border-radius: 10px;
  border: none;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { background } }) => background.primary};
  color: white;
  font-weight: 400;
  margin-bottom: 20px;

  &:disabled {
    background: ${({ theme: { colors } }) => colors.darkPrimary};
  }

  @media (min-width: 320px) and (max-width: 380px) {
    margin-top: 10px;
  }
`;
