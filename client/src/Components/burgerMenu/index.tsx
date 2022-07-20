import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { animated, useTransition } from 'react-spring';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';
import { burgerMenuLinks } from './utils/burgerMenuLinks';
import { useNavigate } from 'react-router-dom';
import ThemeSwitcher from '../layout/themeSwitcher';
import { Text } from '../uiComponents/text';

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BurgerMenuContainer = styled.div`
  @media screen and (max-width: 479px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    height: 100vh;
    bottom: 0;
    left: 0;
    background: ${({ theme }) => theme.background.white};
    z-index: 112;
    background: ${({ theme: { background } }) => background.white};
    padding: 15px 15px 0 15px;
  }
`;
export const BurgerMenuHeader = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 15px;

    svg {
      width: 25px;
      height: 25px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
`;
export const BurgerMenuHeaderLogo = styled.h4`
  @media screen and (max-width: 479px) {
    text-decoration: none;
    font-weight: 600;
    font-size: ${({ theme: { size } }) => size.title.medium};
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;
export const BurgerMenuContent = styled.div`
  @media screen and (max-width: 479px) {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const BurgerMenuLinks = styled.div`
  @media screen and (max-width: 479px) {
  }
`;
export const BurgerMenuLinksItem = styled.div`
  @media screen and (max-width: 479px) {
    padding: 20px 0px;
    font-size: ${({ theme: { size } }) => size.text.large};
    font-weight: 500;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;
export const BurgerMenuFooter = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    padding: 20px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;
export const BurgerMenuLoginButton = styled.button`
  @media screen and (max-width: 479px) {
    height: 100%;
    border: none;
    background: none;
    padding: 0px 20px;
    font-size: ${({ theme: { size } }) => size.text.large};
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;
export const BurgerMenuBackground = styled.div`
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
  @media screen and (max-width: 479px) {
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

const BurgerMenu: FC<Props> = ({ show, setShow }) => {
  const navigate = useNavigate();
  const linkNavigation = (path: string) => {
    navigate(path);
    setShow(false);
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
                  <BurgerMenuLoginButton>Войти</BurgerMenuLoginButton>
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
