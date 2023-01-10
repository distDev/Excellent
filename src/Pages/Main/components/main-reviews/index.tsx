import React from 'react';
import styled from 'styled-components/macro';
import Reviews from '../../../../Components/reviews';

type Props = {};

const MainReviews = (props: Props) => {
  return (
    <MainReviewsContainer>
      <h2 className='title'>Отзывы клиентов</h2>
      <Reviews />
    </MainReviewsContainer>
  );
};

export default MainReviews;

const MainReviewsContainer = styled.div`


  .title {
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
  @media screen and (max-width: 480px) {
   
    .title {
      margin-bottom: 30px;
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
`;
