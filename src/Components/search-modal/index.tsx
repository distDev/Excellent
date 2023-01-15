import styled from "styled-components/macro";
import SearchModalContent from "../search-modal-content";
import { createPortal } from "react-dom";
import { animated, useTransition } from "react-spring";
import { useAppSelector } from "../../Hooks/useAppSelector";

const SearchModal = () => {
  const isOpen = useAppSelector((state) => state.modal.searchModal.isOpen);

  // Анимация модального окна
  const transitions = useTransition(isOpen, {
    expires: 0,
    from: { transform: `translateY(11%)`, opacity: 0 },
    enter: { transform: `translateY(0%)`, opacity: 1 },
    leave: { transform: `translateY(11%)`, opacity: 0 },
  });

  const AnimateContainer = animated(SearchModalContainer);

  return createPortal(
    <>
      {transitions(
        (style, item) =>
          item && (
            <AnimateContainer style={style}>
              <SearchModalContent />
            </AnimateContainer>
          )
      )}
    </>,
    document.body
  );
};

export default SearchModal;

const SearchModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme: { background } }) => background.body};
  overflow-y: scroll;
  z-index: 100;

  @media screen and (max-width: 480px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme: { background } }) => background.body};
    z-index: 100;
  }
`;
