import styled from 'styled-components';

export const BottomNavContainer = styled.header`
  width: 100%;
  max-width: 1140px;
  min-width: 320px;
  display: flex;
  justify-content: center;
  position: fixed;
  background: ${({theme: {background}}) => background.white};
  border-top: 1px solid ${({theme: {colors}}) => colors.border};
  bottom: 0;
  z-index: 100;
  
  svg {
    height: 25px;
    width: 25px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
 
  a {
    outline: none;
    padding: 10px 0px;
    display: inline-block;
    width: 25%;
    text-align: center;
  }
  
  .active-link {
    svg {
      color: #d54068;
    }
  }
`;

export const BottomNavIcon = styled.div`
  padding: 10px 0px;
  display: inline-block;
  width: 25%;
  text-align: center;

  svg {
    height: 25px;
    width: 25px;
    color: ${({ theme: { colors } }) => colors.textMain};
  }
`;
