const generalInformationFields = ["name", "email", "phoneNumber"] as const;
type GeneralInformation = Record<
  (typeof generalInformationFields)[number],
  string
>;

const educationExperienceFields = [
  "schoolName",
  "titleOfStudy",
  "dateOfStudy",
] as const;
type EducationExperience = Record<
  (typeof educationExperienceFields)[number],
  string
>;

const workExperienceFields = [
  "companyName",
  "positionTitle",
  "responsibilities",
  "startDate",
  "endDate",
] as const;
type WorkExperience = Record<(typeof workExperienceFields)[number], string>;

type FormState = {
  generalInformation: GeneralInformation;
  educationExperience: EducationExperience[];
  workExperience: WorkExperience[];
};

export {
  type GeneralInformation,
  type EducationExperience,
  type WorkExperience,
  type FormState,
  generalInformationFields,
  educationExperienceFields,
  workExperienceFields,
};
