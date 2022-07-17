import styled from 'styled-components/macro';

export const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 2fr;
  grid-auto-rows: 60px;
  margin-top: 10px;
  gap: 10px;

  @media screen and (max-width: 479px) {
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-auto-rows: 50px;
    margin-top: 10px;
    gap: 10px;
  }
`;

export const FiltersSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  border: none;
  border-radius: 10px;
  background: ${({ theme: { background } }) => background.secondBg};
  padding: 0px 15px;
  box-sizing: border-box;

  svg {
    height: 23px;
    width: 23px;
  }

  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    border: none;
    border-radius: 16px;
    background: ${({ theme: { background } }) => background.button};
    padding: 0px 15px;
    box-sizing: border-box;

    svg {
      height: 23px;
      width: 23px;
    }
  }
`;

export const FiltersOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 51px;
  width: auto;
  border-radius: 16px;
  background: ${({ theme: { background } }) => background.button};

  svg {
    color: ${({ theme: { colors } }) => colors.textMain};
    height: 20px;
    width: 20px;
  }

  @media screen and (max-width: 479px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 51px;
    width: auto;
    border-radius: 16px;
    background: ${({ theme: { background } }) => background.button};

    svg {
      color: ${({ theme: { colors } }) => colors.textMain};
      height: 20px;
      width: 20px;
    }
  }
`;
