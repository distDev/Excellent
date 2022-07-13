import styled from 'styled-components/macro';

interface IProps {
  variant?: 'activeTab' | null;
}

export const ProfileTabItem = styled.div<IProps>`
  width: auto;
  position: relative;
  border-bottom: 1px solid
    ${({ theme: { colors }, variant }) =>
      variant === 'activeTab' ? 'none' : colors.border};
  background: ${({ theme, variant }) =>
    variant === 'activeTab' ? 'rgba(213, 64, 104, 0.05)' : ''};
  padding: 20px;
  display: flex;
  align-items: center;

  a {
    position: absolute;
    width: 100%;
    height: 100%;
    text-decoration: none;
    border: none;
  }

  @media screen and (max-width: 479px) {
  }
`;
