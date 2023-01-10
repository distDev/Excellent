import React from 'react';
import styled from 'styled-components/macro';
import Timeline from '../../../../Components/timeline';
type Props = {};

const HowWeWork = (props: Props) => {
  return (
    <HowWeWorkContainer>
      <h2 className='title'>Как мы работаем</h2>
      <div className='timeline-container'>
        <Timeline />
      </div>
    </HowWeWorkContainer>
  );
};

export default HowWeWork;

const HowWeWorkContainer = styled.div`
  max-width: 1140px;
  padding: 80px 0px;
  margin: 0px auto;

  .timeline-container {
    margin-top: 80px;
  }
  .title {
    font-weight: 500;
    font-size: 36px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media screen and (max-width: 480px) {
    padding: 50px 20px;
    .title {
      font-weight: 500;
      font-size: 24px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
  }
  @media (min-width: 320px) and (max-width: 390px) {
    padding: 50px 15px;
  }
`;
