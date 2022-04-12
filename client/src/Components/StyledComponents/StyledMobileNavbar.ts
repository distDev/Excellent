import styled from 'styled-components';

export const StyledMobileNavbar = styled.div`
  width: 100%;
  padding: 16px 0px;
  display: flex;
  border-bottom: 1px solid #f2f2f2;
  align-items: center;
  
  svg {
    width: 25px;
    height: 25px;
  }
  h3 {
    margin: ${(props: any) => props.margin || '0px auto'};
  }
`;
