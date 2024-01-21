import React from "react";
import Form from "../Form";
import { generalInformationFields } from "../../context/FormContext";
import useFormContext from "../../context/FormContext/useFormContext";

const GeneralInformationForm: React.FC = () => {
  const { updateGeneralInformation } = useFormContext();
  return (
    <Form
      fields={generalInformationFields}
      onChange={updateGeneralInformation}
    />
  );
};

export default GeneralInformationForm;
