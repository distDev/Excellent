import styled from 'styled-components/macro';

export const AddCarButton = styled.button`
  @media screen and (max-width: 479px) {
      width: calc(100% - 30px);
    position: fixed;
    bottom: 70px;
    left: 15px;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { background } }) => background.primary};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: 600;
  }
`;
