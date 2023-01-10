import React from 'react';
import styled from 'styled-components/macro';
import Reviews from '../../../../Components/reviews';

type Props = {};

const OurReviews = (props: Props) => {
  return (
    <OurReviewsContainer>
      <h2 className='title'>Отзывы клиентов</h2>
      <Reviews />
    </OurReviewsContainer>
  );
};

export default OurReviews;

const OurReviewsContainer = styled.div`
  padding: 80px 20px;
  width: 100%;
  max-width: 1140px;
  margin: 0px auto;

  .title {
    font-weight: 500;
    font-size: 36px;
    color: ${({ theme: { colors } }) => colors.textMain};
    margin-bottom: 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 50px 20px;

    .title {
      font-weight: 500;
      font-size: 24px;
      color: ${({ theme: { colors } }) => colors.textMain};
      margin-bottom: 30px;
    }
  }

  @media (min-width: 320px) and (max-width: 390px) {
    padding: 50px 15px;
  }
`;
