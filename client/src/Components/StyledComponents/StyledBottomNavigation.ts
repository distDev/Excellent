import styled from "styled-components";

export const StyledBottomNavigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  background: #ffffff;
  border-top: 1px solid #e5e5e5;
  bottom: 0;
  z-index: 100;

  svg {
    height: 25px;
    width: 25px;
    color: #454545;
  }

  a {
      outline: none;
      padding: 20px 0px;
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
