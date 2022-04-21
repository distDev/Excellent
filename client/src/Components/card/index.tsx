import {
  CardButton,
  CardContainer,
  CardContent,
  CardImage,
  CardPrice,
  CardTitle,
} from './styles/card';

type Props = {};

const Card = (props: Props) => {
  return (
    <CardContainer>
      <CardImage>
        <img src='/dvig.png' alt='' />
      </CardImage>
      <CardContent>
        <CardTitle>Замена амортизатора подвески (за 1 ось)</CardTitle>
        <CardPrice>1000 ₽</CardPrice>
      </CardContent>
      <CardButton>В корзину</CardButton>
    </CardContainer>
  );
};

export default Card;
