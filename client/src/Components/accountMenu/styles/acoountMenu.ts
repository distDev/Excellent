import styled from 'styled-components/macro';

export const AccountMenuContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 0px;
  width: 300px;
  padding: 20px 20px 10px 20px;
  border-radius: 10px;
  background: ${({ theme: { background } }) => background.white};
  box-shadow: 0px 6px 25px 9px rgba(0, 0, 0, 0.03);
`;

export const AccountMenuHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AccountMenuLinks = styled.div`
  margin-top: 10px;
`;

export const AccountMenuItem = styled.div`
  position: relative;
  padding: 15px 0px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};

  &:last-child {
    border-bottom: none;
  }

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    text-decoration: none;
    z-index: 10;
  }
`;

export const AccounIcon = styled.div`
 
`;
