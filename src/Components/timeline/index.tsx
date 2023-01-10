import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { timelineData } from './timeline-data';

type Props = {};

const Timeline: FC<Props> = () => {
  return (
    <TimelineContainer>
      <div className='rb-container'>
        <ul className='rb'>
          {timelineData.map(({ color, id, position, subtitle, title }) => (
            <TimelineItem bg={color}>
              <div className='step'>{position}</div>
              <div className='timeline-content'>
                <h3 className='timeline-title'>{title} </h3>
                <p className='timeline-subtitle'>{subtitle}</p>
              </div>
            </TimelineItem>
          ))}
        </ul>
      </div>
    </TimelineContainer>
  );
};

export default Timeline;

interface ITimelineItem {
  bg: string;
}
interface ITimelineContainer {
  padding: string;
  mPadding: string;
}

const TimelineContainer = styled.div`
  max-width: 1140px;
  margin: 0px auto;

  .rb-container {
    .rb {
      margin: 0;
      padding: 0;
      display: inline-block;
    }
  }

  @media screen and (max-width: 480px) {
    .rb-container {
      .rb {
        margin: 0;
        padding: 0;
        display: inline-block;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 390px) {
  }
`;

const TimelineItem = styled.li<ITimelineItem>`
  width: 60%;
  list-style: none;
  margin: auto;
  min-height: 50px;
  border-left: 1px dashed ${({ theme: { colors } }) => colors.border};
  padding: 7px 0 80px 60px;
  position: relative;
  margin-left: 28px;

  &:last-child {
    border-left: 0;
    padding: 7px 0 0 60px;
  }
  .timeline-title {
    font-size: 26px;
    color: ${({ theme: { colors } }) => colors.textMain};
    font-weight: 500;
    margin-bottom: 15px;
  }
  .timeline-subtitle {
    font-size: 22px;
    color: ${({ theme: { colors } }) => colors.textSecond};
    font-weight: 400;
    font-size: 16px;
    line-height: 29px;
  }
  .step {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: -30px;
    top: -5px;
    border-radius: 500%;
    background: ${({ bg }) => bg};
    height: 55px;
    width: 55px;
  }

  @media screen and (max-width: 480px) {
    width: calc(100% - 15px);
    list-style: none;
    margin: auto;
    min-height: 50px;
    border-left: 1px dashed ${({ theme: { colors } }) => colors.textSecond};
    padding: 0 0 50px 30px;
    position: relative;
    margin-left: 15px;

    &:last-child {
      border-left: 0;
      padding: 0 0 0px 30px;
    }
    .timeline-title {
      font-size: ${({ theme: { size } }) => size.title.normal};
      color: ${({ theme: { colors } }) => colors.textMain};
      font-weight: 500;
      margin-bottom: 15px;
    }
    .timeline-subtitle {
      font-size: ${({ theme: { size } }) => size.text.normal};
      color: ${({ theme: { colors } }) => colors.textSecond};
      font-weight: 400;
      font-size: 16px;
    }
    .step {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      left: -17px;
      top: -5px;
      border-radius: 500%;
      background: ${({ bg }) => bg};
      height: 32px;
      width: 32px;
    }
  }

  @media (min-width: 320px) and (max-width: 390px) {
    width: 100%;
  }
`;
