import styled from 'styled-components/macro';

export const SearchModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme: { background } }) => background.body};
  overflow-y: scroll;

  @media screen and (max-width: 479px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: ${({ theme: { background } }) => background.body};
  }
`;

export const SearchInputContainer = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
  grid-auto-rows: 50px;
  gap: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  z-index: 20;
  background: ${({ theme: { background } }) => background.body};
  padding: 0 40px;

  @media screen and (max-width: 479px) {
    display: grid;
    grid-template-columns: 7fr 2fr;
    grid-auto-rows: 50px;
    gap: 10px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 5px 15px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.border};
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: ${({ theme: { background } }) => background.body};
  color: ${({ theme: { colors } }) => colors.textMain};
`;

export const SearchClearButton = styled.button`
  border: none;
  text-align: end;
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { size } }) => size.text.normal};
  background: none;

  @media screen and (max-width: 479px) {
    border: none;
    text-align: end;
    color: ${({ theme: { colors } }) => colors.primary};
    font-size: ${({ theme: { size } }) => size.text.normal};
    background: none;
  }
`;

export const SearchContent = styled.div`
  max-width: 1140px;
  padding: 0px;
  margin: 0px auto;
  margin-top: 40px;

  @media screen and (max-width: 479px) {
    max-width: auto;
    padding: 15px;
    margin: 0px;
    margin-top: 40px;
  }
`;
