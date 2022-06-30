import styled from 'styled-components/macro';

export const CarItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
`;

export const CartItemBox = styled.div`
  display: flex;
  gap: 0px 40px;
  align-items: center;

  svg {
    height: 25px;
    width: 25px;
    color: ${({ theme: { colors } }) => colors.textSecond};
  }
`;
