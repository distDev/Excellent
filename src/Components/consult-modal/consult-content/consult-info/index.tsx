import React, { FC } from "react";
import styled from "styled-components/macro";
import NumberFormat from "react-number-format";
import { Text } from "../../../ui-components/text";
import { Input } from "../../../ui-components/input";

type Props = {
  formik: any;
};

const ConsultInfo: FC<Props> = ({ formik }) => {
  return (
    <ConsultInfoContainer>
      <Text color="textSecond">Данные для связи</Text>
      <Input
        {...formik.getFieldProps("name")}
        type="text"
        placeholder="Имя"
        name="name"
        variant={
          formik.touched.name && formik.errors.name
            ? "error"
            : formik.touched.name && !formik.errors.name
            ? "complited"
            : null
        }
      />

      {formik.touched.name && formik.errors.name && (
        <Text color="primary">{formik.errors.name}</Text>
      )}

      <NumberFormat
        customInput={Input}
        name="phone"
        placeholder="Номер телефона"
        onBlur={formik.handleBlur}
        onValueChange={(values) => {
          const { value } = values;

          formik.setFieldValue("phone", value);
        }}
        format="+7 (###) ###-####"
        variant={
          formik.touched.phone && formik.errors.phone
            ? "error"
            : formik.touched.phone && !formik.errors.phone
            ? "complited"
            : null
        }
      />

      {formik.touched.phone && formik.errors.phone && (
        <Text color="primary">{formik.errors.phone}</Text>
      )}
    </ConsultInfoContainer>
  );
};

export default ConsultInfo;

const ConsultInfoContainer = styled.div`
  display: grid;
  gap: 15px;
`;
