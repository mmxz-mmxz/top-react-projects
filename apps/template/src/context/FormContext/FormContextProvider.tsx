import React, { useCallback, useState } from "react";

import {
  generalInformationFields,
  GeneralInformation,
  FormState,
  educationExperienceFields,
  workExperienceFields,
  EducationExperience,
  WorkExperience,
} from "./types";
import { FormContext } from "./useFormContext";
import { arrayToObject } from "../../utils";

const initialFormState: FormState = {
  generalInformation: arrayToObject([...generalInformationFields]),
  educationExperience: [arrayToObject([...educationExperienceFields])],
  workExperience: [arrayToObject([...workExperienceFields])],
};

type Props = {
  children: React.ReactNode;
};

const FormContextProvider: React.FC<Props> = ({ children }) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const updateGeneralInformation = useCallback(
    (field: keyof GeneralInformation, value: string) => {
      setFormState((prevState) => ({
        ...prevState,
        generalInformation: {
          ...prevState.generalInformation,
          [field]: value,
        },
      }));
    },
    [],
  );

  const updateEducationExperience = useCallback(
    (index: number, field: keyof EducationExperience, value: string) => {
      setFormState((prevState) => {
        const shallowEducationExperienceCopy = [
          ...prevState.educationExperience,
        ];
        shallowEducationExperienceCopy[index] = {
          ...shallowEducationExperienceCopy[index],
          [field]: value,
        };

        return {
          ...prevState,
          educationExperience: shallowEducationExperienceCopy,
        };
      });
    },
    [],
  );

  const addEducationExperience = useCallback(() => {
    setFormState((prevState) => ({
      ...prevState,
      educationExperience: [
        ...prevState.educationExperience,
        ...initialFormState.educationExperience,
      ],
    }));
  }, []);

  const updateWorkExperience = useCallback(
    (index: number, field: keyof WorkExperience, value: string) => {
      setFormState((prevState) => {
        const shallowWorkExperienceCopy = [...prevState.workExperience];
        shallowWorkExperienceCopy[index] = {
          ...shallowWorkExperienceCopy[index],
          [field]: value,
        };

        return {
          ...prevState,
          workExperience: shallowWorkExperienceCopy,
        };
      });
    },
    [],
  );

  const addWorkExperience = useCallback(() => {
    setFormState((prevState) => ({
      ...prevState,
      workExperience: [
        ...prevState.workExperience,
        ...initialFormState.workExperience,
      ],
    }));
  }, []);

  const context = {
    formState,
    updateGeneralInformation,
    updateEducationExperience,
    addEducationExperience,
    updateWorkExperience,
    addWorkExperience,
  };

  return (
    <FormContext.Provider value={context}>{children}</FormContext.Provider>
  );
};

export default FormContextProvider;
