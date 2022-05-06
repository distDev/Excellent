import { RiCheckFill } from 'react-icons/ri';
import CartCards from '../../../Cart/components/cartCards';
import {
  ModalStatus,
  ModalStatusIcon,
  ModalStatusTitle,
} from './styles/cardsServiceModal';
import ModalCheck from '../modalCheck/index';

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
      <CartCards del={false}/>
      <ModalCheck />
    </>
  );
};

export default CardsServiceContent;
