import styled from 'styled-components';

export interface Styles {
  flexDirection?: 'row' | 'column';
  justifyContent?: 'space-between' | 'space-around' | 'center' | 'flex-start';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
}


export const StyledMobileTab = styled.div`
  padding: 20px 0px;
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }
`;

export const StyledMobileTabContent = styled.div`
  display: flex;
  gap: 15px;
`;
export const StyledMobileTabIcon = styled.div`
  padding: 14px;
  background: #f4f4f4;
  color: #454545;
  border-radius: 10px;
  display: flex;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    margin: auto;
  }
`;

