import { RiCheckFill } from 'react-icons/ri';
import OrderCards from '../../../../Components/orderCards';
import {
  ModalStatus,
  ModalStatusIcon,
  ModalStatusTitle,
} from './styles/cardsServiceModal';
import TotalCheck from '../../../../Components/TotalCheck/index';
import { Container } from '../../../../Components/uiComponents/container';

type Props = {};

const CardsServiceContent = (props: Props) => {
  return (
    <>
      <ModalStatus>
        <ModalStatusIcon>
          <RiCheckFill />
        </ModalStatusIcon>
        <ModalStatusTitle>Выполнено</ModalStatusTitle>
      </ModalStatus>
      <Container>
        <OrderCards del={false} />
      </Container>
      <TotalCheck />
    </>
  );
};

export default CardsServiceContent;
