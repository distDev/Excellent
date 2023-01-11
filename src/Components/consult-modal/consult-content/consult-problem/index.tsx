import React, { FC } from "react";
import styled from "styled-components/macro";
import { Text } from "../../../ui-components/text";

type Props = {
  formik: any;
};

const ConsultProblem: FC<Props> = ({ formik }) => {
  return (
    <ConsultProblemContainer>
      <Text color="textSecond">Опишите проблему</Text>
      <Textarea
        {...formik.getFieldProps("problem")}
        name="problem"
        variant={
          formik.touched.problem && formik.errors.problem
            ? "error"
            : formik.touched.problem && !formik.errors.problem
            ? "complited"
            : null
        }
      />
      {formik.touched.problem && formik.errors.problem && (
        <Text color="primary">{formik.errors.problem}</Text>
      )}
    </ConsultProblemContainer>
  );
};

export default ConsultProblem;

interface ITextarea {
  variant?: "complited" | "error" | null;
}

const ConsultProblemContainer = styled.div`
  display: grid;
  gap: 15px;
`;

const Textarea = styled.textarea<ITextarea>`
  padding: 20px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  border: none;
  background: ${({ theme, variant }) =>
    variant === "complited"
      ? theme.background.white
      : variant === "error"
      ? theme.background.white
      : theme.background.secondBg};
  color: ${({ theme: { colors }, variant }) =>
    variant === "error"
      ? colors.primary
      : variant === "complited"
      ? colors.textMain
      : colors.textMain};
  box-shadow: ${({ theme: { colors }, variant }) =>
    variant === "error"
      ? `0px 0px 0px 1px ${colors.primary}`
      : variant === "complited"
      ? `0px 0px 0px 1px ${colors.textSecond}`
      : "none"};
  font-size: ${({ theme: { size } }) => size.text.normal};
  font-weight: 600;

  &::placeholder {
    color: ${({ theme: { colors }, variant }) =>
      variant === "error" ? colors.primary : colors.textSecond};
  }

  @media (min-width: 320px) and (max-width: 390px) {
    padding: 17px;
    width: 100%;
    border-radius: 8px;
    font-weight: 400;
  }
`;
