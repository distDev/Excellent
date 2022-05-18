import styled from 'styled-components/macro';

export const OrderWrapper = styled.div`
  @media screen and (max-width: 479px) {
   width: 100%;
   height: auto;
  }
`;

export const FormItem = styled.div`
  @media screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 50px;
  }
`;