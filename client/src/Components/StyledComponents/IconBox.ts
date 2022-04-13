import styled from "styled-components";

interface Props {
  height: string;
  width: string;
}

export const IconBox = styled.div<Props>`
  svg {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
  }
`;