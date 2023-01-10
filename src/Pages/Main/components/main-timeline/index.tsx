import React from 'react';
import styled from 'styled-components/macro';
import Timeline from '../../../../Components/timeline';
type Props = {};

const MainTimeline = (props: Props) => {
  return (
    <MainTimelineContainer>
      <h3>Как мы работаем</h3>
      <div className='timeline__content'>
        <Timeline />
      </div>
    </MainTimelineContainer>
  );
};

export default MainTimeline;

const MainTimelineContainer = styled.div`
  .timeline__content {
    padding: 50px 50px;
    border: 1px solid ${({ theme: { colors } }) => colors.border};
    border-radius: 20px;
  }
  h3 {
    margin-bottom: 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    color: ${({ theme: { colors } }) => colors.textMain};

    @media screen and (max-width: 480px) {
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0px;
    border: none;
    display: none;

    .timeline__content {
      padding: 0;
      border: none;
      border-radius: 20px;
    }

    h3 {
      font-style: normal;
      font-weight: 500;
      font-size: 28px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
`;
