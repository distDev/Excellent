import styled from "styled-components/macro";
import { FC } from "react";
import { IoClose } from "react-icons/io5";
import { animated, useTransition } from "react-spring";
import { createPortal } from "react-dom";
import ConsultContent from "./consult-content/ConsultContent";
import { useAppSelector } from "../../Hooks/useAppSelector";
import { useAppDispatch } from "../../Hooks/useAppDispatch";
import { switchConsultModalView } from "../../Store/slices/modal-slice";

const ConsultModal: FC = () => {
  const show = useAppSelector((state) => state.modal.consulModal.isOpen);
  const dispatch = useAppDispatch();

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
  const AnimateModal = animated(ModalContainer);
  return createPortal(
    <>
      {transitionsWrap(
        (style, item) =>
          item && (
            <AnimateBackground
              style={style}
              onClick={() => dispatch(switchConsultModalView())}
            />
          )
      )}
      {transitions(
        (style, item) =>
          item && (
            <AnimateModal style={style}>
              <ModalClose onClick={() => dispatch(switchConsultModalView())}>
                <IoClose />
              </ModalClose>
              <ModalContent>
                <ConsultContent />
              </ModalContent>
            </AnimateModal>
          )
      )}
    </>,
    document.body
  );
};

export default ConsultModal;

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

const ModalContainer = styled.div`
  position: fixed;
  width: 700px;
  height: 600px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background: ${({ theme }) => theme.background.white};
  border-radius: 20px;
  z-index: 111;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    position: fixed;
    width: 100%;
    height: 90vh;
    bottom: 0;
    left: 0;
    right: auto;
    top: auto;
    background: ${({ theme }) => theme.background.white};
    border-radius: 20px 20px 0px 0px;
    z-index: 111;
  }
`;

const ModalContent = styled.div`
  padding: 40px 0px 0px 0px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 0px 0px 0px;
    width: 100%;
    height: 90vh;
    overflow-y: scroll;
  }
`;

const ModalClose = styled.div`
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
