import React from "react";

import useFormContext from "../../context/FormContext/useFormContext";

const GeneralInformationDisplay: React.FC = () => {
  const { formState } = useFormContext();
  return (
    <div>
      <h1>Name: {formState.generalInformation.name}</h1>
      <p>Email: {formState.generalInformation.email}</p>
      <p>Phone Number: {formState.generalInformation.phoneNumber}</p>
    </div>
  );
};

export default GeneralInformationDisplay;
