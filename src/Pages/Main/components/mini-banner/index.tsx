import { FC } from 'react';
import styled from 'styled-components/macro';

interface Props {
  variant: string;
  title: string;
  subtitle: string;
  img: string;
}

const MiniBanner: FC<Props> = ({ variant, title, subtitle, img }) => {
  return (
    <MiniBannerContainer variant={variant}>
      <div className='mini-banner__text'>
        <p className='mini-banner__title'>{title}</p>
        <p className='mini-banner__subtitle'>{subtitle}</p>
      </div>
      <img src={img} alt='guard' />
    </MiniBannerContainer>
  );
};

export default MiniBanner;

interface IMiniBanner {
  variant: string;
}

const MiniBannerContainer = styled.div<IMiniBanner>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 70%;
  margin: 0px auto;
  height: 100px;
  border-radius: 15px;
  background: ${({ theme: { background }, variant }) =>
    variant === 'green' ? background.lightGreen : background.secondLightRed};
  padding: 20px 25px;

  img {
    position: absolute;
    bottom: 2px;
    right: 0;
    width: 130px;
    height: 130px;
  }

  .mini-banner__title {
    font-size: 20px;
    font-weight: ${({ theme: { fontW } }) => fontW.medium};
    margin-bottom: 10px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
  .mini-banner__subtitle {
    color: ${({ theme: { colors } }) => colors.textMain};
  }
  @media screen and (max-width: 480px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 90px;
    border-radius: 15px;
    padding: 0 25px;

    .mini-banner__title {
      font-size: 16px;
      font-weight: ${({ theme: { fontW } }) => fontW.medium};
      margin-bottom: 5px;
    }
    .mini-banner__subtitle {
      font-size: 14px;
    }

    img {
      position: absolute;
      bottom: 2px;
      right: 0;
      width: 107px;
      height: 107px;
    }
  }

  @media (min-width: 320px) and (max-width: 380px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 80px;
    border-radius: 15px;
    padding: 0 15px;

    .mini-banner__title {
      font-size: 14px;
      font-weight: ${({ theme: { fontW } }) => fontW.medium};
      margin-bottom: 5px;
    }
    .mini-banner__subtitle {
      font-size: 12px;
    }

    img {
      position: absolute;
      bottom: 2px;
      right: -10px;
      width: 90px;
      height: 90px;
    }
  }
`;
