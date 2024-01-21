import React, { useMemo } from "react";
import Form from "../Form";
import { educationExperienceFields } from "../../context/FormContext";
import useFormContext from "../../context/FormContext/useFormContext";

const EducationExperienceForm: React.FC = () => {
  const { formState, updateEducationExperience, addEducationExperience } =
    useFormContext();
  const forms = useMemo(
    () =>
      [...new Array(formState.educationExperience.length).keys()].map((idx) => (
        <Form
          key={`education-experience-form-${idx}`}
          fields={educationExperienceFields}
          onChange={(field, value) =>
            updateEducationExperience(idx, field, value)
          }
        />
      )),
    [formState.educationExperience.length, updateEducationExperience],
  );

  return (
    <div>
      {forms}
      <button onClick={addEducationExperience}>
        Add New Education Experience
      </button>
    </div>
  );
};

export default EducationExperienceForm;
