import { FC, useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components/macro';
import { animated, useTransition } from 'react-spring';
import { createPortal } from 'react-dom';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { switchAuthModalView } from '../../Store/slices/modal-slice';

type Props = {
  show: boolean;
};

const ModalMedium: FC<Props> = ({ show, children }) => {
  const dispatch = useAppDispatch();
  const ref = useRef<any>(null);
  useOutsideClick(ref);
  // Анимация модального окна
  const transitions = useTransition(show, {
    from: { transform: `translateY(100%)` },
    enter: { transform: `translateY(0%)` },
    leave: { transform: `translateY(100)` },
  });

  // Анимация фона
  const transitionsWrap = useTransition(show, {
    expires: 0,
    from: { opacity: 0 },
    enter: { opacity: 0.9 },
    leave: { opacity: 0 },
  });

  const AnimateBackground = animated(ModalBackground);
  const AnimateModal = animated(ModalMediumContainer);

  // Обнаружение клика вне блока
  function useOutsideClick(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          dispatch(switchAuthModalView());
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  return createPortal(
    <>
      {transitionsWrap(
        (style, item) => item && <AnimateBackground style={style} />
      )}
      {transitions(
        (style, item) =>
          item && (
            <AnimateModal style={style}>
              <ModalMediumContent ref={ref}>
                <ModalClose onClick={() => dispatch(switchAuthModalView())}>
                  <IoClose />
                </ModalClose>
                {children}
              </ModalMediumContent>
            </AnimateModal>
          )
      )}
    </>,
    document.body
  );
};

export default ModalMedium;

const ModalClose = styled.div`
  position: absolute;
  top: 13px;
  right: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  color: white;
  background: rgba(0, 0, 0, 0.1);
  cursor: pointer;

  svg {
    height: 24px;
    width: 24px;
  }

  @media screen and (max-width: 480px) {
    position: fixed;
    top: 13px;
    right: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: white;
    background: rgba(0, 0, 0, 0.1);

    svg {
      height: 24px;
      width: 24px;
    }
  }
`;

const ModalMediumContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;

  z-index: 111;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 66vh;
    top: auto;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.background.white};
    border-radius: 20px 20px 0px 0px;
    z-index: 111;
    margin: 0;
  }

  @media (min-width: 320px) and (max-width: 380px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 430px;
    top: auto;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.background.white};
    border-radius: 20px 20px 0px 0px;
    z-index: 111;
    margin: 0;
  }
`;

const ModalMediumContent = styled.div`
  position: relative;
  display: grid;
  gap: 30px;
  padding: 25px 30px;

  width: 400px;
  height: auto;
  background: ${({ theme }) => theme.background.white};
  border-radius: 20px;

  @media screen and (max-width: 480px) {
    display: grid;
    gap: 30px;
    padding: 25px 20px;
    width: 100%;
    height: 100%;
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
  z-index: 111;
  background: rgba(0, 0, 0, 0.4);

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
