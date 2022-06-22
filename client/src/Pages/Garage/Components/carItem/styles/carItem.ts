import styled from 'styled-components/macro';

export const CarItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
`;
