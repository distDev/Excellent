import { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import { ModalBackground, ModalClose, ModalContainer } from './styles/modal';
import { useSpring, animated, useTransition, useSprings } from 'react-spring';

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: FC<Props> = ({ show, setShow, children }) => {
  // Анимация модального окна
  const transitions = useTransition(show, {
    from: { opacity: 0, transform: `translateY(100%)` },
    enter: { opacity: 1, transform: `translateY(0%)` },
    leave: { opacity: 0, transform: `translateY(100%)` },
  });

  // Анимация темного фона
  const transitionsWrap = useTransition(show, {
    expires: 0,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const AnimateBackground = animated(ModalBackground);
  const AnimateModal = animated(ModalContainer);
  return (
    <>
      {transitionsWrap(
        (style, item) =>
          item && (
            <AnimateBackground style={style} onClick={() => setShow(false)} />
          )
      )}
      {transitions(
        (style, item) =>
          item && (
            <AnimateModal style={style}>
              <ModalClose onClick={() => setShow(false)}>
                <IoClose />
              </ModalClose>
              {children}
            </AnimateModal>
          )
      )}
    </>
  );
};

export default Modal;
