import { FC } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { IService } from '../../Types/serviceInterface';
import styled from 'styled-components/macro';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { removeFromCart } from '../../Store/slices/cart-slice';

type Props = {
  del?: boolean;
};

const CardOrder: FC<IService & Props> = ({
  img,
  name,
  price,
  id,
  del = true,
}) => {
  const dispatch = useAppDispatch();

  // удаление из корзины
  const removeService = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <CardOrderContainer>
      <CardOrderMedia>
        <img src={img} alt='img' />
      </CardOrderMedia>
      <CardOrderTitle>{name}</CardOrderTitle>
      <CardOrderPrice>{price} ₽</CardOrderPrice>
      {del ? (
        <CardOrderDelete
          onClick={() => removeService(id)}
          data-cy='card-order-del'
        >
          <RiCloseFill />
        </CardOrderDelete>
      ) : null}
    </CardOrderContainer>
  );
};

export default CardOrder;

const CardOrderContainer = styled.div`
  position: relative;
  padding: 20px 0px;
  display: flex;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};

  @media screen and (max-width: 480px) {
    position: relative;
    padding: 20px 0px;
    display: flex;

    border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;

const CardOrderMedia = styled.div`
  width: 86px;
  border-radius: 11px;
  background: ${({ theme: { background } }) => background.secondBg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;

  img {
    width: 60%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (max-width: 480px) {
    width: 86px;
    border-radius: 11px;
    background: ${({ theme: { background } }) => background.secondBg};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 60%;
      height: auto;
      object-fit: contain;
    }
  }
`;

const CardOrderTitle = styled.p`
  font-size: ${({ theme: { size } }) => size.text.small};
  max-width: 50%;
  color: ${({ theme: { colors } }) => colors.textMain};

  @media screen and (max-width: 480px) {
    font-size: ${({ theme: { size } }) => size.text.small};
    max-width: 50%;
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media (min-width: 320px) and (max-width: 380px) {
    font-size: ${({ theme: { size } }) => size.text.small};
    max-width: 45%;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

const CardOrderPrice = styled.h4`
  align-self: flex-end;
  margin-left: auto;
  font-size: ${({ theme: { size } }) => size.title.small};
  color: ${({ theme: { colors } }) => colors.textMain};

  @media screen and (max-width: 480px) {
    align-self: flex-end;
    margin-left: auto;
    font-size: ${({ theme: { size } }) => size.title.small};
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media (min-width: 320px) and (max-width: 380px) {
    align-self: flex-end;
    margin-left: auto;
    font-size: 14px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

const CardOrderDelete = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  width: 20px;
  height: 20px;

  svg {
    color: ${({ theme: { colors } }) => colors.textSecond};
    cursor: pointer;
    &:hover {
      color: ${({ theme: { colors } }) => colors.primary};
    }
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    top: 20px;
    right: 0;
    width: 20px;
    height: 20px;

    svg {
      color: ${({ theme: { colors } }) => colors.textSecond};
    }
  }
`;
