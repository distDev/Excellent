import { ICartData, IService } from '../../Types/serviceInterface';
import styled from 'styled-components/macro';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { addToCart, removeFromCart } from '../../Store/slices/cart-slice';

const Card = ({ name, price, img, id }: IService) => {
  // получение данных из корзины, чтобы проверить наличие
  const cartData: ICartData[] = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  // добавление/удаление услуг в корзину
  const cartHandler = (
    id: string,
    price: string | number,
    img: string,
    name: string
  ) => {
    // удаление из корзины
    if (cartData.length > 0 && cartData.find((e) => e.id === id)) {
      return dispatch(removeFromCart(id));
    }
    // добавление в корзину
    dispatch(addToCart({ id: id, price: price, img: img, name: name }));
  };

  const checkCart = (id: string) => {
    if (cartData.length > 0 && cartData.find((e) => e.id === id)) {
      return 'inTheCart';
    }
    return;
  };

  return (
    <CardContainer>
      <CardImage>
        <img src={img} alt='' />
      </CardImage>
      <CardContent>
        <CardTitle>{name.slice(0, 30)}</CardTitle>
        <CardPrice>{price} ₽</CardPrice>
      </CardContent>
      <CardButton
        variant={checkCart(id)}
        onClick={() => cartHandler(id, price, img, name)}
      >
        {checkCart(id) === 'inTheCart' ? 'Добавлено' : 'В корзину'}
      </CardButton>
    </CardContainer>
  );
};

export default Card;

interface IButton {
  variant?: 'inTheCart' | null;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme: { background } }) => background.secondBg};
  border-radius: 10px;
  padding: 0px 16px 16px 16px;
  font-size: ${({ theme: { size } }) => size.text.small};
  font-weight: 500;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    background: ${({ theme: { background } }) => background.secondBg};
    border-radius: 10px;
    padding: 0px 12px 12px 12px;
    font-size: ${({ theme: { size } }) => size.text.small};
    font-weight: 500;
  }
  @media (min-width: 320px) and (max-width: 390px) {
    display: flex;
    flex-direction: column;
    background: ${({ theme: { background } }) => background.secondBg};
    border-radius: 8px;
    padding: 0px 10px 10px 10px;
    font-size: ${({ theme: { size } }) => size.text.small};
    font-weight: 500;
  }
`;

const CardImage = styled.div`
  height: 220px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70%;
    height: auto;
    object-fit: contain;
  }

  @media screen and (max-width: 480px) {
    height: 170px;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 65%;
      height: auto;
      object-fit: contain;
    }
  }

  @media (min-width: 320px) and (max-width: 390px) {
    height: 130px;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    img {
      width: 80%;
      height: auto;
      object-fit: contain;
    }
  }
`;

const CardContent = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    height: 70px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  @media (min-width: 320px) and (max-width: 390px) {
    height: 75px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

const CardTitle = styled.h4`
  font-size: 15px;
  font-weight: medium;
  color: ${({ theme: { colors } }) => colors.textMain};
  margin-bottom: 10px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
    font-weight: medium;
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media (min-width: 320px) and (max-width: 390px) {
    font-size: 12px;
    font-weight: medium;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;

const CardPrice = styled.h4`
  color: ${({ theme: { colors } }) => colors.textSecond};
  font-size: 16px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
    font-weight: medium;
    color: ${({ theme: { colors } }) => colors.textSecond};
  }

  @media (min-width: 320px) and (max-width: 390px) {
    font-size: 14px;
    font-weight: medium;
    color: ${({ theme: { colors } }) => colors.textSecond};
  }
`;

const CardButton = styled.button<IButton>`
  width: 100%;
  margin-top: 15px;
  border: none;
  padding: 16px;
  border-radius: 10px;
  color: ${({ theme: { colors }, variant }) =>
    variant === 'inTheCart' ? colors.white : colors.textMain};
  background: ${({ theme: { background }, variant }) =>
    variant === 'inTheCart' ? background.primary : background.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);

  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 15px;
    border: none;
    padding: 10px;
    border-radius: 10px;
    background: ${({ theme: { background }, variant }) =>
      variant === 'inTheCart' ? background.primary : background.white};
    color: ${({ theme: { colors }, variant }) =>
      variant === 'inTheCart' ? colors.white : colors.textMain};

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
`;
