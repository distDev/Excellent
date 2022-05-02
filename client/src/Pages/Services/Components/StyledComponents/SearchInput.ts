import styled from 'styled-components';

export const SearchInput = styled.input`
  height: 51px;
  border: none;
  border-radius: 16px;
  background: #f1f0ec;
  font-size: ${({ theme: { size } }) => size.text.normal};
  flex: 5;
  padding: 0px 15px;
  box-sizing: border-box;

  &::placeholder {
    color: 979692;
  }
`;
