import styled from 'styled-components/macro';

type Props = {};

const CardsSkeleton = (props: Props) => {
  return (
    <CardsSkeletonContainer>
      <div className='cards-skeleton__grid'>
        {Array(6)
          .fill(1)
          .map((e) => (
            <div className='cards-skeleton__item'>
              <div className='cards-skeleton__img'></div>
              <div className='cards-skeleton__title'></div>
              <div className='cards-skeleton__title second-title'></div>
              <div className='cards-skeleton__button'></div>
            </div>
          ))}
      </div>
    </CardsSkeletonContainer>
  );
};

export default CardsSkeleton;

const CardsSkeletonContainer = styled.div`
  .cards-skeleton__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    margin-top: 40px;
  }

  .cards-skeleton__item {
    border-radius: 10px;
    padding: 16px;
    background: ${({ theme: { background } }) => background.secondBg};
  }

  .cards-skeleton__img {
    width: 100%;
    height: 200px;
    background: ${({ theme: { background } }) => background.skeleton};
    border-radius: 15px;
    margin-bottom: 20px;
    background-image: linear-gradient(
      90deg,
      ${({ theme: { background } }) => background.skeleton} 0px,
      ${({ theme: { background } }) => background.skeletonTs} 40px,
      ${({ theme: { background } }) => background.skeleton} 80px
    );
    background-size: 600px;
    animation: shine 1.6s infinite linear;
  }

  .cards-skeleton__title {
    width: 100%;
    height: 10px;
    border-radius: 20px;
    margin-bottom: 6px;
    background-image: linear-gradient(
      90deg,
      ${({ theme: { background } }) => background.skeleton} 0px,
      ${({ theme: { background } }) => background.skeletonTs} 40px,
      ${({ theme: { background } }) => background.skeleton} 80px
    );
    background-size: 600px;
    animation: shine 1.6s infinite linear;
  }
  .second-title {
    width: 60%;
  }
  .cards-skeleton__button {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background: ${({ theme: { background } }) => background.skeleton};
    border-radius: 10px;
    margin-top: 50px;
    background-image: linear-gradient(
      90deg,
      ${({ theme: { background } }) => background.skeleton} 0px,
      ${({ theme: { background } }) => background.skeletonTs} 40px,
      ${({ theme: { background } }) => background.skeleton} 80px
    );
    background-size: 600px;
    animation: shine 1.6s infinite linear;
  }

  @media screen and (max-width: 480px) {
    .cards-skeleton__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-top: 20px;
    }
    .cards-skeleton__item {
      border-radius: 10px;
      padding: 16px;
      background: ${({ theme: { background } }) => background.secondBg};
    }

    .cards-skeleton__img {
      width: 100%;
      height: 150px;
      background: ${({ theme: { background } }) => background.skeleton};
      border-radius: 10px;
      margin-bottom: 20px;
      background-image: linear-gradient(
        90deg,
        ${({ theme: { background } }) => background.skeleton} 0px,
        ${({ theme: { background } }) => background.skeletonTs} 40px,
        ${({ theme: { background } }) => background.skeleton} 80px
      );
      background-size: 600px;
      animation: shine 1.6s infinite linear;
    }

    .cards-skeleton__title {
      width: 100%;
      height: 10px;
      border-radius: 20px;
      margin-bottom: 6px;
      background: ${({ theme: { background } }) => background.skeleton};
      background-image: linear-gradient(
        90deg,
        ${({ theme: { background } }) => background.skeleton} 0px,
        ${({ theme: { background } }) => background.skeletonTs} 40px,
        ${({ theme: { background } }) => background.skeleton} 80px
      );
      background-size: 600px;
      animation: shine 1.6s infinite linear;
    }
    .second-title {
      width: 60%;
    }

    .cards-skeleton__button {
      width: 100%;
      height: 40px;
      border-radius: 10px;
      background: ${({ theme: { background } }) => background.skeleton};
      border-radius: 10px;
      margin-top: 50px;
      background-image: linear-gradient(
        90deg,
        ${({ theme: { background } }) => background.skeleton} 0px,
        ${({ theme: { background } }) => background.skeletonTs} 40px,
        ${({ theme: { background } }) => background.skeleton} 80px
      );
      background-size: 600px;
      animation: shine 1.6s infinite linear;
    }
  }

  @keyframes shine {
    0% {
      background-position: -32px;
    }
    40%,
    100% {
      background-position: 208px;
    }
  }
`;
