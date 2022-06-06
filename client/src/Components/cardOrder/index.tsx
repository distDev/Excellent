import { FC } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeServiceFromCart } from '../../State/action-creators';
import { useAppSelector } from '../../State/store';
import { ICartData, IService } from '../../Types/serviceInterface';
import {
  CardOrderContainer,
  CardOrderDelete,
  CardOrderMedia,
  CardOrderPrice,
  CardOrderTitle,
} from './styles/cardOrder';

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
  const cartData: ICartData[] = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  // удаление из корзины
  const removeService = (id: string) => {
    dispatch(removeServiceFromCart(id));
  };

  return (
    <CardOrderContainer>
      <CardOrderMedia>
        <img src={img} alt='img' />
      </CardOrderMedia>
      <CardOrderTitle>{name}</CardOrderTitle>
      <CardOrderPrice>{price} ₽</CardOrderPrice>
      {del ? (
        <CardOrderDelete onClick={() => removeService(id)}>
          <RiCloseFill />
        </CardOrderDelete>
      ) : null}
    </CardOrderContainer>
  );
};

export default CardOrder;
