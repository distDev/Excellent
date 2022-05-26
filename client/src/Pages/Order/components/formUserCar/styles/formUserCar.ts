import styled from 'styled-components/macro';

interface IProps {
  variant?: 'active' | null;
}

export const FormUserCarContainer = styled.div<IProps>`
  @media screen and (max-width: 479px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background: ${({ theme: { background }, variant }) =>
      variant === 'active' ? background.white : background.secondBg};
    color: ${({ theme: { colors }, variant }) =>
      variant === 'active' ? colors.textMain : colors.textSecond};
    box-shadow: ${({ theme: { colors }, variant }) =>
      variant === 'active' ? `0px 0px 0px 1px ${colors.textSecond}` : 'none'};
  }
`;
