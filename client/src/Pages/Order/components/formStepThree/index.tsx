import OrderCards from '../../../../Components/orderCards';
import TotalCheck from '../../../../Components/TotalCheck';
import { Container } from '../../../../Components/uiComponents/container';
import Input from '../../../../Components/uiComponents/input';
import { Text } from '../../../../Components/uiComponents/text';
import {
  FormCheckboxContainer,
  FormCheckboxItem,
  FormSubmit,
  FormSubmitButtom,
} from '../styles';

type Props = {};

const FormStepThree = (props: Props) => {
  return (
    <>
      <Container>
        <OrderCards del={false} />
      </Container>
      <Container variant='large'>
        <TotalCheck />
        <Container bg='secondBg'>
          <FormSubmit>
            <FormCheckboxContainer>
              <FormCheckboxItem>
                <input id='calling' type='checkbox' />
                <label htmlFor='calling'>
                  <Text>Перезвонить мне</Text>
                </label>
              </FormCheckboxItem>
              <FormCheckboxItem>
                <input id='consent' type='checkbox' />
                <label htmlFor='consent'>
                  <Text>Даю согласие на обработку данных</Text>
                </label>
              </FormCheckboxItem>
            </FormCheckboxContainer>
            <FormSubmitButtom>Записаться</FormSubmitButtom>
          </FormSubmit>
        </Container>
      </Container>
    </>
  );
};

export default FormStepThree;
