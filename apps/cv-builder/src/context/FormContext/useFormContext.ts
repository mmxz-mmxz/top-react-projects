import { createContext, useContext } from "react";

import {
  GeneralInformation,
  EducationExperience,
  FormState,
  WorkExperience,
} from "./types";

export type UseFormContext = {
  updateGeneralInformation: (
    field: keyof GeneralInformation,
    value: string,
  ) => void;
  updateEducationExperience: (
    index: number,
    field: keyof EducationExperience,
    value: string,
  ) => void;
  addEducationExperience: () => void;
  updateWorkExperience: (
    index: number,
    field: keyof WorkExperience,
    value: string,
  ) => void;
  addWorkExperience: () => void;
  formState: FormState;
};

export const FormContext = createContext<UseFormContext>({} as UseFormContext);

const useFormContext = (): UseFormContext => {
  const ctx = useContext(FormContext);

  if (!ctx) throw Error("Must use useFormContext with FormContextProvider");

  return ctx;
};

export default useFormContext;
