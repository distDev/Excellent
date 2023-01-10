import React from 'react';
import styled from 'styled-components/macro';

type Props = {};

const Loader = (props: Props) => {
  return (
    <LoaderContainer>
      <LoaderSpin />
    </LoaderContainer>
  );
};

export default Loader;

const LoaderContainer = styled.div`
  width: 48px;
  height: 48px;

  .loader {
    width: 48px;
    height: 48px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    animation: skLinRotate 1s ease-in-out infinite alternate;
  }
  .loader:after {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #ff3d00;
  }
  @keyframes skLinRotate {
    95%,
    100% {
      transform: rotate(840deg);
    }
  }
  @media screen and (max-width: 480px) {
    .loader {
      width: 48px;
      height: 48px;
      background: #fff;
      border-radius: 50%;
      position: relative;
      animation: skLinRotate 1s ease-in-out infinite alternate;
    }
    .loader:after {
      content: '';
      position: absolute;
      inset: 5px;
      border-radius: 50%;
      border: 5px solid transparent;
      border-top-color: #ff3d00;
    }
    @keyframes skLinRotate {
      95%,
      100% {
        transform: rotate(840deg);
      }
    }
  }
`;

const LoaderSpin = styled.div`
  width: 48px;
  height: 48px;
  background: #f7f7f7;
  border-radius: 50%;
  position: relative;
  animation: skLinRotate 1s ease-in-out infinite alternate;

  &::after {
    content: '';
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #d54068;
  }

  @keyframes skLinRotate {
    95%,
    100% {
      transform: rotate(840deg);
    }
  }
`;
