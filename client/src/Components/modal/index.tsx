import { FC } from 'react';
import { IoClose } from 'react-icons/io5';
import { ModalBackground, ModalClose, ModalContainer } from './styles/modal';
import { useSpring, animated, useTransition } from 'react-spring';

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal: FC<Props> = ({ show, setShow }) => {
  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0%)' : 'translateY(100%)',
  });

  const transitions = useTransition(show, null, {
    from: { opacity: 0, transform: `translateY(100%)` },
    enter: { opacity: 1, transform: `translateY(0%)` },
    leave: { opacity: 0, transform: `translateY(100%)` },
  });

  return (
    <>
      {show && (
        <ModalBackground>
          {transitions.map(
            ({ item, key, props: style }) =>
              item && (
                <animated.div
                  style={style}
                  key={key}
                >
                  <ModalContainer>
                    <ModalClose onClick={() => setShow((prev) => !prev)}>
                      <IoClose />
                    </ModalClose>
                  </ModalContainer>
                </animated.div>
              )
          )}
        </ModalBackground>
      )}
    </>
  );
};

export default Modal;
