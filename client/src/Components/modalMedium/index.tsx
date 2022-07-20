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
import {
  ModalBackgroundImage,
  ModalMediumContainer,
  ModalMediumContent,
} from './styles/modalMedium';
import { useAppDispatch } from '../../State/store';
import { handleChangeAuthModal } from '../../State/action-creators';

type Props = {
  show: boolean;
 
};

const ModalMedium: FC<Props> = ({ show, children }) => {
const dispatch = useAppDispatch()

  // Анимация модального окна
  const transitions = useTransition(show, {
    from: { transform: `translateY(100%)` },
    enter: { transform: `translateY(0%)` },
    leave: { transform: `translateY(100%)` },
  });

  // Анимация фона
  const transitionsWrap = useTransition(show, {
  
    expires: 0,
    from: { opacity: 0 },
    enter: { opacity: 0.9 },
    leave: { opacity: 0 },
  });

  const AnimateBackground = animated(ModalBackgroundImage);
  const AnimateModal = animated(ModalMediumContainer);
  return createPortal(
    <>
      {transitionsWrap(
        (style, item) =>
          item && (
            <AnimateBackground
              style={style}
              onClick={() => dispatch(handleChangeAuthModal())}
            />
          )
      )}
      {transitions(
        (style, item) =>
          item && (
            <AnimateModal style={style}>
              <ModalClose onClick={() => dispatch(handleChangeAuthModal())}>
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
