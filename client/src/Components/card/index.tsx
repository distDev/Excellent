import { useDispatch } from 'react-redux';
import {
  addServiceToCart,
  removeServiceFromCart,
} from '../../State/action-creators';
import { useAppSelector } from '../../State/store';
import { ICartData, IService } from '../../Types/serviceInterface';
import {
  CardButton,
  CardContainer,
  CardContent,
  CardImage,
  CardPrice,
  CardTitle,
} from './styles/card';

const Card = ({ name, price, img, id }: IService) => {
  // получение данных из корзины, чтобы проверить наличие
  const cartData: ICartData[] = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  // добавление/удаление услуг в корзину
  const cartHandler = (
    id: string,
    price: string | number,
    img: string,
    name: string
  ) => {
    // удаление из корзины
    if (cartData.length > 0 && cartData.find((e) => e.id === id)) {
      return dispatch(removeServiceFromCart(id));
    }
    // добавление в корзину
    dispatch(addServiceToCart(id, price, img, name));
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
        В корзину
      </CardButton>
    </CardContainer>
  );
};

export default Card;
