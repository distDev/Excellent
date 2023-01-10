import { FC } from 'react';
import styled from 'styled-components/macro';
import { IService } from '../../Types/serviceInterface';
import Card from '../card';

type Props = {
  data: IService[];
};

const CardsGrid: FC<Props> = ({ data }) => {
  return (
    <CardsGridContainer data-cy='cards-container'>
      {data.map((e) => (
        <Card key={e.id} id={e.id} img={e.img} name={e.name} price={e.price} />
      ))}
    </CardsGridContainer>
  );
};

export default CardsGrid;

export const CardsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  margin-top: 40px;

  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 30px;
  }
`;
