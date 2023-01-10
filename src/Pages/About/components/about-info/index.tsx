import styled from 'styled-components/macro';

type Props = {};

const AboutInfo = (props: Props) => {
  return (
    <AboutInfoContainer>
      <div className='container'>
        <div className='about__info-top'>
          <div className='about__info_title_box'>
            <h1 className='about__info_title'>Excellent</h1>
            <div className='about__info_sticker'>надежный</div>
          </div>
          <h4 className='about__info_subtitle'>
            Автосервис, которому можно <br /> доверять!
          </h4>
        </div>
        <div className='about__info-content'>
          <h2 className='title'>Немного о нас</h2>
          <div className='about__grid'>
            <div className='about__grid_item'>
              <p>Работаем более 7 лет</p>
            </div>
            <div className='about__grid_item'>
              <p>Высокое качество</p>
            </div>
            <div className='about__grid_item'>
              <p>Выгодные цены</p>
            </div>
          </div>
        </div>
      </div>
    </AboutInfoContainer>
  );
};

export default AboutInfo;

const AboutInfoContainer = styled.div`
  width: 100%;
  background: ${({ theme: { background } }) => background.lightPurple};
  padding: 140px 20px 80px 20px;
  border-radius: 10px;

  .container {
    max-width: 1140px;
    margin: 0px auto;
  }
  .about__info_title {
    font-size: 60px;
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
  .about__info_subtitle {
    font-weight: 500;
    font-size: 32px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
  .about__info_title_box {
    position: relative;
    margin-bottom: 15px;
  }
  .about__info_sticker {
    position: absolute;
    left: 245px;
    bottom: 50px;
    background: #b67cff;
    color: white;
    font-size: 12px;
    padding: 5px 10px 7px 10px;
    border-radius: 20px;
    transform: rotate(-10deg);
  }
  .about__info-content {
    margin-top: 70px;
  }
  .about__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 30px;
    gap: 15px;

    div:nth-child(1) {
      border: 1px solid #85a0ff;
    }
    div:nth-child(2) {
      border: 1px solid #9685ff;
    }
    div:nth-child(3) {
      border: 1px solid #b67cff;
    }
  }
  .about__grid_item {
    padding: 25px;
    border-radius: 10px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
  .title {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    background: ${({ theme: { background } }) => background.lightPurple};
    padding: 50px 20px;

    .about__info_title {
      font-size: 36px;
      font-weight: 700;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
    .about__info_subtitle {
      font-weight: 500;
      font-size: 24px;
      color: ${({ theme: { colors } }) => colors.textMain};
    }
    .about__info_title_box {
      position: relative;
      margin-bottom: 15px;
    }
    .about__info_sticker {
      position: absolute;
      left: 146px;
      bottom: 30px;
      background: #b67cff;
      color: white;
      font-size: 12px;
      padding: 5px 10px 7px 10px;
      border-radius: 20px;
      transform: rotate(-10deg);
    }
    .about__info-content {
      margin-top: 70px;
    }
    .about__grid {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 30px;
      gap: 15px;

      div:nth-child(1) {
        border: 1px solid #85a0ff;
      }
      div:nth-child(2) {
        border: 1px solid #9685ff;
      }
      div:nth-child(3) {
        border: 1px solid #b67cff;
      }
    }
    .about__grid_item {
      padding: 25px;
      border-radius: 10px;
    }
    .title {
      font-size: 24px;
      font-weight: 500;
    }
  }

  @media (min-width: 320px) and (max-width: 390px) {
    padding: 50px 15px;
  }
`;
