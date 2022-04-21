import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 20px;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
  }
`;