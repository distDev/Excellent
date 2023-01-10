import { FC, useState } from 'react';
import styled from 'styled-components/macro';
import { Text } from '../../../../Components/ui-components/text';
import { ICar } from '../../../../Types/userInterfaces';

type Props = {
  onClick?: any;
  variant?: 'active' | null;
};

const FormUserCar: FC<Props & ICar> = ({
  brand,
  model,
  year,
  onClick,
  variant,
}) => {
  return (
    <FormUserCarContainer onClick={onClick} variant={variant}>
      <Text color='textSecond'>{`${brand} ${model}`}</Text>
      <Text color='textSecond'>{year}</Text>
    </FormUserCarContainer>
  );
};

export default FormUserCar;

interface IProps {
  variant?: 'active' | null;
}

const FormUserCarContainer = styled.div<IProps>`
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
  cursor: pointer;

  @media screen and (max-width: 480px) {
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
