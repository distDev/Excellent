import styled from 'styled-components/macro';

interface IWrap {
  width?: string;
}

export const Wrapper = styled.div<IWrap>`
  max-width: ${({ width }) => width ? width : '1140px'};
  margin: 0px auto;
  position: relative;
  @media screen and (max-width: 480px) {
    margin: 0px;
    padding: 0px;
  }
`;
