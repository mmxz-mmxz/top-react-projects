import React from "react";

import useFormContext from "../../context/FormContext/useFormContext";
import { EducationExperience } from "../../context/FormContext";

const EducationExperienceDisplay: React.FC = () => {
  const { formState } = useFormContext();
  return (
    <div>
      {formState.educationExperience.map((exp) =>
        Object.keys(exp).map((field) => (
          <p key={field}>
            {field}: {exp[field as keyof EducationExperience]}
          </p>
        )),
      )}
    </div>
  );
};

export default EducationExperienceDisplay;
