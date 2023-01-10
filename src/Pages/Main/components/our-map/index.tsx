import styled from 'styled-components/macro';

type Props = {};

const OurMap = (props: Props) => {
  return (
    <OurMapContainer>
      <MainTitle>Автосервис на карте</MainTitle>
      <div>
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A46401b55688d0e64a4ab3b58016f7adc00d4c7db46eb610a199b85edb2ed61d0&amp;source=constructor'
          width='100%'
          height='300'
        />
      </div>
    </OurMapContainer>
  );
};

export default OurMap;

const MainTitle = styled.h3`
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
`;

const OurMapContainer = styled.div`
  width: 100%;

  iframe {
    border: none;
    box-shadow: none;
    margin-top: 25px;
    border-radius: 8px;
    height: 500px;
    border: 1px solid ${({ theme: { colors } }) => colors.border};
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    iframe {
      border: none;
      box-shadow: none;
      margin-top: 25px;
      height: 300px;
      border-radius: 6px;
    }
  }
`;
