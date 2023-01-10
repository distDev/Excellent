import styled from 'styled-components/macro';

const OurBenefits = () => {
  const data = [
    {
      img: '/phone-icon.svg',
      title: 'Удобство',
      subtitle:
        'Мы сделали удобный личный кабинет, в котором вы сможете следить за процессом работы, проверять историю записей и добавлять автомобили',
    },
    {
      img: '/watch-icon.svg',
      title: 'Эконономия',
      subtitle:
        'Мы экономим ваше время и деньги, сами заказывая запчасти у проверенных поставщиков',
    },
    {
      img: '/medal-icon.svg',
      title: 'Профессионализм',
      subtitle: 'Мы очень тщательно относимся к подбору специалистов в команду',
    },
  ];
  return (
    <OurBenefitsContainer>
      <div className='container'>
        <h2 className='title'>Наши преимущества</h2>
        <div className='our-benefits__grid'>
          {data.map(({ img, subtitle, title }) => (
            <div className='our-benefits__grid_item'>
              <img src={img} alt='' />
              <h4>{title}</h4>
              <p>{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </OurBenefitsContainer>
  );
};

export default OurBenefits;

const OurBenefitsContainer = styled.div`
  padding: 80px 20px;
  width: 100%;
  background: ${({ theme: { background } }) => background.extraLightBlue};
  border-radius: 10px;

  .container {
    max-width: 1140px;
    margin: 0px auto;
  }

  .our-benefits__grid {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 400px;
    gap: 20px;
  }
  .our-benefits__grid_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background: ${({ theme: { background } }) => background.white};
    border-radius: 10px;

    h4 {
      font-weight: 500;
      font-size: 24px;
      color: ${({ theme: { colors } }) => colors.textMain};
      margin-bottom: 20px;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme: { colors } }) => colors.textSecond};
      text-align: center;
    }
    img {
      height: 80px;
      width: auto;
      margin-bottom: 30px;
    }
  }
  .title {
    font-weight: 500;
    font-size: 36px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }

  @media screen and (max-width: 480px) {
    padding: 50px 20px;

    .our-benefits__grid {
      margin-top: 30px;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-rows: 400px;
      gap: 20px;
    }
    .our-benefits__grid_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 15px;
      background: ${({ theme: { background } }) => background.white};
      border-radius: 10px;

      h4 {
        font-weight: 500;
        font-size: 24px;
        color: ${({ theme: { colors } }) => colors.textMain};
        margin-bottom: 20px;
      }
      p {
        font-weight: 400;
        font-size: 16px;
        color: ${({ theme: { colors } }) => colors.textSecond};
        text-align: center;
      }
      img {
        height: 80px;
        width: auto;
        margin-bottom: 30px;
      }
    }
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
