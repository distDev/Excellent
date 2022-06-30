import { updateProfile } from 'firebase/auth';
import React, { FC, useState } from 'react';
import {
  ModalFixButton,
  ModalInput,
  ModalSubtitle,
} from '../../../../Components/modal/styles/modal';
import { Container } from '../../../../Components/uiComponents/container';
import { authentication } from '../../../../Firebase/firebase-config';
import { SettingsModalContentItem } from './styles/modalContent';

interface Props {
  setName: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingsModalContent: FC<Props> = ({ name, setName, setShow }) => {
  const [userName, setUserName] = useState(name);
  const user = authentication.currentUser;

  // изменение имени пользователя
  const handleChangeName = () => {
    const user: any = authentication.currentUser;
    // изменение на сервере
    updateProfile(user, {
      displayName: userName,
    })
      .then(() => {
        console.log('Имя изменено');
      })
      .catch((error) => {
        console.log('Произошла ошибка при изменении профиля: ' + error);
      });
    // изменение в state
    setName(userName);
    // закрытие модального окна
    setShow(false);
  };

  return (
    <Container>
      <SettingsModalContentItem>
        <ModalSubtitle>Имя</ModalSubtitle>
        <ModalInput
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </SettingsModalContentItem>
      <ModalFixButton onClick={handleChangeName} primary>
        Изменить
      </ModalFixButton>
    </Container>
  );
};
