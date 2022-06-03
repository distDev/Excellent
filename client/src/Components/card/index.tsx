import { IService } from '../../Types/serviceInterface';
import {
  CardButton,
  CardContainer,
  CardContent,
  CardImage,
  CardPrice,
  CardTitle,
} from './styles/card';

const Card = ({ name, price, img, id }: IService) => {

  

  return (
    <CardContainer>
      <CardImage>
        <img src={img} alt='' />
      </CardImage>
      <CardContent>
        <CardTitle>{name.slice(0, 30)}</CardTitle>
        <CardPrice>{price}</CardPrice>
      </CardContent>
      <CardButton>В корзину</CardButton>
    </CardContainer>
  );
};

export default Card;
