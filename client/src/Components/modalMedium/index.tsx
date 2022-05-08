import { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import {
  ModalBackground,
  ModalClose,
  ModalContainer,
  ModalContent,
} from '../modal/styles/modal';
import { animated, useTransition } from 'react-spring';
import { createPortal } from 'react-dom';
import { ModalBackgroundImage, ModalMediumContainer, ModalMediumContent } from './styles/modalMedium';

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalMedium: FC<Props> = ({ show, setShow, children }) => {
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
  

  const AnimateBackground = animated(ModalBackgroundImage);
  const AnimateModal = animated(ModalMediumContainer);
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
              <ModalMediumContent>{children}</ModalMediumContent>
            </AnimateModal>
          )
      )}
    </>,
    document.body
  );
};

export default ModalMedium;
