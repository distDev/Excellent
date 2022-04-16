import styled from 'styled-components';

export const StyledMobileTab = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
  gap: 20px;
  position: relative;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
`;
