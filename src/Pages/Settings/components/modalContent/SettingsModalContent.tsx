import { updateProfile } from 'firebase/auth';
import React, { FC, useState } from 'react';
import {
  ModalFixButton,
  ModalInput,
  ModalSubtitle,
} from '../../../../Components/modal/styles/modal';
import { Container } from '../../../../Components/ui-components/container';
import { authentication } from '../../../../Firebase/firebase-config';
import styled from 'styled-components/macro';
import { Input } from '../../../../Components/ui-components/input';

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
        <Input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder='Имя'
          data-cy='username-input'
        />
      </SettingsModalContentItem>
      <ModalFixButton
        onClick={handleChangeName}
        primary
        data-cy="change-username-btn"
      >
        Изменить
      </ModalFixButton>
    </Container>
  );
};

const SettingsModalContentItem = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    display: grid;
    gap: 7px;
  }
`;
