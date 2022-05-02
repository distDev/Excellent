import styled from 'styled-components';

export const FilterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 51px;
  width: auto;
  border-radius: 16px;
  background: #f1f0ec;
  flex: 1;

  svg {
    color: ${({ theme: { colors } }) => colors.textMain};
    height: 20px;
    width: 20px;
  }
`;
