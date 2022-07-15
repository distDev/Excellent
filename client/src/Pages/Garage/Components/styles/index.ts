import styled from 'styled-components/macro';

export const AddCarButton = styled.button`
  width: 30%;
  position: relative;
  bottom: 0;
  left: 0;
  padding: 20px;
  border-radius: 10px;
  border: none;
  font-size: ${({ theme: { size } }) => size.text.small};
  background: ${({ theme: { background } }) => background.button};
  color: ${({ theme: { colors } }) => colors.textSecond};
  font-weight: 600;
  margin: 0px auto;
  margin-top: 60px;

  @media screen and (max-width: 479px) {
    width: calc(100% - 30px);
    position: fixed;
    bottom: 70px;
    left: 15px;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: ${({ theme: { background } }) => background.button};
    color: ${({ theme: { colors } }) => colors.textSecond};
    font-weight: 600;
    margin: 0px;
  }
`;
