import styled from 'styled-components/macro';
import AboutInfo from './components/about-info';
import OurBenefits from './components/our-benefits';
import OurReviews from './components/our-reviews';
import HowWeWork from './components/how-we-work';

const About = () => {
  return (
    <AboutContainer>
      <AboutInfo />
      <HowWeWork />
      <OurBenefits />
      <OurReviews />
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div``;
