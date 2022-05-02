import React, { FC } from 'react';
import {
  ModalFixButton,
  ModalInput,
  ModalSubtitle,
} from '../../../../Components/modal/styles/modal';
import { SettingsModalContentItem } from './styles/modalContent';

interface Props {

}

export const SettingsModalContent: FC<Props> = () => {
  return (
    <>
      <SettingsModalContentItem>
        <ModalSubtitle>Имя</ModalSubtitle>
        <ModalInput value={'Дмитрий'} name='brand' />
      </SettingsModalContentItem>
      <ModalFixButton primary>
        Изменить
      </ModalFixButton>
    </>
  );
};
