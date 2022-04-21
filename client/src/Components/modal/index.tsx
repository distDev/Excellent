import { ModalBackground, ModalContainer } from './styles/modal';

type Props = {};

const Modal = (props: Props) => {
  return (
    <ModalBackground>
      <ModalContainer></ModalContainer>
    </ModalBackground>
  );
};

export default Modal;
