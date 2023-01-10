import styled from 'styled-components/macro';

interface IWrap {
  margin?: string | null;
}

export const ContentWrapper = styled.div<IWrap>`
  margin: ${({ margin }) => (margin ? margin : '90px 0 0 0')};
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`;
