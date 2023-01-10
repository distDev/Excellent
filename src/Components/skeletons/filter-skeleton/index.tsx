
import styled from 'styled-components/macro';
import { pcView } from '../../../Utils/helperConst';

type Props = {};

const FilterSceleton = (props: Props) => {
  return (
    <FilterSceletonContainer>
      <div className='filter__search'></div>
      {!pcView && <div className='filter__option'></div>}
      {pcView && (
        <>
          <div className='filter__select'></div>
          <div className='filter__select'></div>
        </>
      )}
    </FilterSceletonContainer>
  );
};

export default FilterSceleton;

const FilterSceletonContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 2fr;
  grid-auto-rows: 60px;
  margin-top: 10px;
  gap: 10px;

  .filter__search {
    height: 60px;
    border-radius: 10px;
    background-image: linear-gradient(
      90deg,
      ${({ theme: { background } }) => background.skeleton} 0px,
      ${({ theme: { background } }) => background.skeletonTs} 40px,
      ${({ theme: { background } }) => background.skeleton} 80px
    );
    background-size: 600px;
    animation: shine 1.6s infinite linear;
  }
  .filter__select {
    height: 60px;
    border-radius: 10px;
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
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-auto-rows: 50px;
    margin-top: 10px;
    gap: 10px;

    .filter__search {
      height: 51px;
      border-radius: 16px;
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
    .filter__option {
      height: 51px;
      border-radius: 16px;
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
