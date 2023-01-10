import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { animated, useTransition } from 'react-spring';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { burgerMenuLinks } from './utils/burgerMenuLinks';
import { useNavigate } from 'react-router-dom';
import ThemeSwitcher from '../layout/themeSwitcher';
import { Text } from '../ui-components/text';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { switchAuthModalView } from '../../Store/slices/modal-slice';
import { useLogout } from '../../Hooks/useLogout';

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const BurgerMenu: FC<Props> = ({ show, setShow }) => {
  const user = useAppSelector((state) => state.user?.phoneNumber);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logout = useLogout();
  const linkNavigation = (path: string) => {
    navigate(path);
    setShow(false);
  };

  // закрытие меню и открытие окна авторизации
  const handleLogin = () => {
    setShow(false);
    setTimeout(() => {
      dispatch(switchAuthModalView());
    }, 400);
  };

  // Анимация меню
  const transitions = useTransition(show, {
    from: { transform: `translateX(-100%)` },
    enter: { transform: `translateX(0%)` },
    leave: { transform: `translateX(-100%)` },
  });

  // Анимация темного фона
  const transitionsWrap = useTransition(show, {
    expires: 0,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const AnimateBackground = animated(BurgerMenuBackground);
  const AnimateMenu = animated(BurgerMenuContainer);

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
            <AnimateMenu style={style}>
              <BurgerMenuHeader>
                <IoClose onClick={() => setShow((prev) => !prev)} />
                <BurgerMenuHeaderLogo>EX</BurgerMenuHeaderLogo>
              </BurgerMenuHeader>
              <BurgerMenuContent>
                <BurgerMenuLinks>
                  {burgerMenuLinks.map((e) => (
                    <BurgerMenuLinksItem onClick={() => linkNavigation(e.path)}>
                      <Text variant='large' color='textMain'>
                        {e.name}
                      </Text>
                    </BurgerMenuLinksItem>
                  ))}
                </BurgerMenuLinks>
                <BurgerMenuFooter>
                  {user && (
                    <BurgerMenuLoginButton onClick={logout}>
                      Выйти
                    </BurgerMenuLoginButton>
                  )}
                  {!user && (
                    <BurgerMenuLoginButton onClick={handleLogin}>
                      Войти
                    </BurgerMenuLoginButton>
                  )}
                  <ThemeSwitcher />
                </BurgerMenuFooter>
              </BurgerMenuContent>
            </AnimateMenu>
          )
      )}
    </>,
    document.body
  );
};

export default BurgerMenu;

const BurgerMenuContainer = styled.div`
  @media screen and (max-width: 480px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    bottom: 0;
    left: 0;
    top: 0;
    background: ${({ theme }) => theme.background.white};
    z-index: 112;
    background: ${({ theme: { background } }) => background.white};
    padding: 15px 15px 0 15px;
  }
`;
const BurgerMenuHeader = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    align-items: center;

    svg {
      width: 25px;
      height: 25px;
      color: ${({ theme: { colors } }) => colors.textMain};
      margin-right: 15px;
    }
  }
`;
const BurgerMenuHeaderLogo = styled.h4`
  @media screen and (max-width: 480px) {
    text-decoration: none;
    font-weight: 600;
    font-size: ${({ theme: { size } }) => size.title.medium};
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;
const BurgerMenuContent = styled.div`
  @media screen and (max-width: 480px) {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const BurgerMenuLinks = styled.div`
  @media screen and (max-width: 480px) {
  }
`;
const BurgerMenuLinksItem = styled.div`
  @media screen and (max-width: 480px) {
    padding: 20px 0px;
    font-size: ${({ theme: { size } }) => size.text.large};
    font-weight: 500;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;
const BurgerMenuFooter = styled.div`
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;
const BurgerMenuLoginButton = styled.button`
  @media screen and (max-width: 480px) {
    height: 100%;
    border: none;
    background: none;
    font-size: ${({ theme: { size } }) => size.text.large};
    color: ${({ theme: { colors } }) => colors.textMain};
    text-align: start;
  }
`;
const BurgerMenuBackground = styled.div`
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
