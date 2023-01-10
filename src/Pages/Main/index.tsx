import { Container } from '../../Components/ui-components/container';
import styled from 'styled-components/macro';
import MainBanners from './components/main-banners';
import MiniBanner from './components/mini-banner';
import OurServices from './components/our-services';
import OurMap from './components/our-map';
import MainTimeline from './components/main-timeline';
import MainReviews from './components/main-reviews';

type Props = {};

const Main = (props: Props) => {
  return (
    <Container variant='large'>
      <MainContent>
        <MainBanners />
        <MiniBanner
          img='/guard.png'
          title='Работаем в штатном режиме'
          subtitle='Каждый день с 10:00 до 21:00'
          variant='green'
        />
        <OurServices />
        <MainTimeline />
        <MiniBanner
          img='/geo.png'
          title='Главные вопросы'
          subtitle='Узнайте больше об автосервисе'
          variant='red'
        />
        <MainReviews />
        <OurMap />
      </MainContent>
    </Container>
  );
};

export default Main;

const MainContent = styled.div`
  display: grid;
  gap: 150px;
  margin-bottom: 100px;

  @media screen and (max-width: 480px) {
    display: grid;
    gap: 100px;
    margin-bottom: 100px;
    padding: 0px 15px;
  }
`;
