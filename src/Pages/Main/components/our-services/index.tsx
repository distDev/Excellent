import styled from 'styled-components/macro';
import { mainServiceBanners } from '../../utils/main-data';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { routerConst } from '../../../../Utils/routerConst';
import { useAppDispatch } from '../../../../Hooks/useAppDispatch';
import { changeFilters } from '../../../../Store/slices/filter-slice';

type Props = {};

const OurServices = (props: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // переход на страницу услуг и изменение категории
  const handleChangeCategory = (subcategory: string) => {
    dispatch(changeFilters({ category: 'Автосервис', subcategory }));
    navigate(routerConst.SERVICES_ROUTE);
  };

  return (
    <OurServicesContainer>
      <MainTitle>Наши услуги</MainTitle>
      <OurServicesGrid>
        {mainServiceBanners.map((e) => (
          <OurServicesItem
            key={e.title}
            variant={e.variant}
            onClick={() => handleChangeCategory(e.subcategory)}
          >
            <OurServicesContent>
              <OurServicesText variant={e.color === 'dark' ? 'dark' : null}>
                <p>{e.title}</p>
                <p>{e.subtitle}</p>
              </OurServicesText>
              <OurServicesLink>
                <RiArrowRightSLine />
              </OurServicesLink>
            </OurServicesContent>
            <img src={e.img} alt='' />
          </OurServicesItem>
        ))}
      </OurServicesGrid>
      <OurServicesMore onClick={() => navigate(routerConst.SERVICES_ROUTE)}>
        Все услуги
      </OurServicesMore>
    </OurServicesContainer>
  );
};

export default OurServices;

interface IServicesBanner {
  variant: string;
}
interface IServicesText {
  variant: 'dark' | null;
}
const OurServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 20px;
  height: auto;
  margin-top: 25px;

  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    height: auto;
    margin-top: 25px;
  }
  @media screen and (max-width: 391px) {
    grid-column-gap: 15px;
    grid-row-gap: 15px;
  }
`;

const OurServicesItem = styled.div<IServicesBanner>`
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  grid-column: ${({ variant }) => (variant === 'large' ? 'span 4' : 'span 2')};
  height: ${({ variant }) => (variant === 'large' ? '300px' : '300px')};
  padding: 20px;
  cursor: pointer;

  img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: ${({ variant }) => (variant === 'large' ? '140px' : '140px')};
    height: ${({ variant }) => (variant === 'large' ? '147px' : '147px')};
  }

  &:nth-child(1) {
    background: ${({ theme: { background } }) => background.darkGrey};
  }
  &:nth-child(2) {
    background: ${({ theme: { background } }) => background.lightMallow};
  }
  &:nth-child(3) {
    background: ${({ theme: { background } }) => background.lightOrange};
  }
  &:nth-child(4) {
    background: ${({ theme: { background } }) => background.lightRed};
  }

  @media screen and (max-width: 480px) {
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    grid-column: ${({ variant }) =>
      variant === 'large' ? 'span 4' : 'span 2'};
    height: ${({ variant }) => (variant === 'large' ? '160px' : '180px')};
    padding: 20px;

    img {
      position: absolute;
      right: 0;
      bottom: 0;
      width: ${({ variant }) => (variant === 'large' ? '112px' : '83px')};
      height: ${({ variant }) => (variant === 'large' ? '116px' : '85px')};
    }
  }

  @media (min-width: 320px) and (max-width: 390px) {
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    grid-column: ${({ variant }) =>
      variant === 'large' ? 'span 4' : 'span 4'};
    height: ${({ variant }) => (variant === 'large' ? '9em' : '9em')};
    padding: 20px;

    img {
      position: absolute;
      right: 0;
      bottom: 0;
      width: ${({ variant }) => (variant === 'large' ? '70px' : '70px')};
      height: ${({ variant }) => (variant === 'large' ? '73px' : '73px')};
    }
  }
`;

const OurServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`;
const OurServicesText = styled.div<IServicesText>`
  p {
    font-size: 20px;
    color: ${({ theme: { colors }, variant }) =>
      variant === 'dark' ? colors.textMain : 'white'};
    font-weight: 500;
  }

  @media screen and (max-width: 480px) {
    min-width: 87px;
    max-width: 98px;

    p {
      font-size: 16px;
      color: ${({ theme: { colors }, variant }) =>
        variant === 'dark' ? colors.textMain : 'white'};
      font-weight: 400;
    }
  }
`;
const OurServicesLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  width: 47px;
  height: 47px;
  border-radius: 8px;

  svg {
    width: 60%;
    height: 60%;
    color: #404040;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 37px;
    height: 37px;
    border-radius: 8px;

    svg {
      width: 60%;
      height: 60%;
      color: #404040;
    }
  }
`;

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

const OurServicesContainer = styled.div`
  @media screen and (max-width: 480px) {
  }
`;

const OurServicesMore = styled.button`
  display: block;
  margin: 0px auto;
  margin-top: 50px;
  padding: 0px 90px;

  height: 60px;
  border: none;
  border-radius: 10px;
  background: ${({ theme: { background } }) => background.button};
  color: ${({ theme: { colors } }) => colors.textMain};
  font-size: ${({ theme: { size } }) => size.text.small};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
    margin-top: 15px;
    height: 60px;
    border: none;
    border-radius: 10px;
    background: ${({ theme: { background } }) => background.button};
    color: ${({ theme: { colors } }) => colors.textMain};
    font-size: ${({ theme: { size } }) => size.text.small};
  }
`;
