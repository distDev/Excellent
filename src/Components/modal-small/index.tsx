import { FC } from 'react';
import { animated, useTransition } from 'react-spring';
import { createPortal } from 'react-dom';
import styled from 'styled-components/macro';

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
          item && <AnimateModal style={style}>{children}</AnimateModal>
      )}
    </>,
    document.body
  );
};

export default ModalSmall;

const ModalSmallContainer = styled.div`
  @media screen and (max-width: 480px) {
    display: grid;
    gap: 30px;
    padding: 40px 13px;
    position: fixed;
    width: 100%;
    height: 43vh;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.background.white};
    border-radius: 20px 20px 0px 0px;
    overflow-y: scroll;
    z-index: 111;
  }
  @media (min-width: 320px) and (max-width: 380px) {
    display: grid;
    gap: 30px;
    padding: 40px 13px;
    position: fixed;
    width: 100%;
    height: 55vh;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.background.white};
    border-radius: 20px 20px 0px 0px;
    overflow-y: scroll;
    z-index: 111;
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 111;

  @media screen and (max-width: 480px) {
    position: fixed;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 111;
  }
`;
