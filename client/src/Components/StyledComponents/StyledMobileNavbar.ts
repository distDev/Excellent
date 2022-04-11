import styled from 'styled-components';

export const StyledMobileNavbar = styled.div`
  width: 100%;
  padding: 18px 0px;
  display: flex;
  border-bottom: 1px solid #f2f2f2;

  h3 {
    margin: ${(props: any) => props.margin || '0px auto'};
  }
`;
