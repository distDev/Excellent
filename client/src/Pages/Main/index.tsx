import { Container } from '../../Components/StyledComponents/Container';

type Props = {};

const Main = (props: Props) => {

  console.log(process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE);
  return <Container></Container>;
};

export default Main;
