import { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import { animated, useTransition } from 'react-spring';
import { createPortal } from 'react-dom';
import { ModalSmallContainer } from './styles/modalSmall';
import { ModalBackground, ModalClose } from '../modal/styles/modal';

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalSmall: FC<Props> = ({ show, setShow, children }) => {
  // Анимация модального окна
  const transitions = useTransition(show, {
    from: { transform: `translateY(100%)` },
    enter: { transform: `translateY(0%)` },
    leave: { transform: `translateY(100%)` },
  });

  // Анимация темного фона
  const transitionsWrap = useTransition(show, {
    expires: 0,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const AnimateBackground = animated(ModalBackground);
  const AnimateModal = animated(ModalSmallContainer);
  return createPortal(
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
    </>,
    document.body
  );
};

export default ModalSmall;
