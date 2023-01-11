import React, { FC } from "react";
import styled from "styled-components/macro";
import CarSelects from "../../../car-selects";
import { Text } from "../../../ui-components/text";

type Props = {
  formik: any;
};

const ConsultCarPicker: FC<Props> = ({ formik }) => {
  return (
    <ConsultCarPickerContainer>
      <Text color="textSecond">Выберите автомобиль</Text>
      <CarSelects formik={formik} />
    </ConsultCarPickerContainer>
  );
};

export default ConsultCarPicker;

const ConsultCarPickerContainer = styled.div`
  display: grid;
  gap: 15px;
`;
