import { FormContextProvider } from "./context/FormContext";
import "./App.css";
import {
  GeneralInformationDisplay,
  GeneralInformationForm,
} from "../../cv-builder/src/components/GeneralInformation";
import {
  EducationExperienceDisplay,
  EducationExperienceForm,
} from "../../cv-builder/src/components/EducationExperience";

function App() {
  return (
    <FormContextProvider>
      <div>
        <div>
          <GeneralInformationForm />
          <EducationExperienceForm />
        </div>
        <div>
          <GeneralInformationDisplay />
          <EducationExperienceDisplay />
        </div>
      </div>
    </FormContextProvider>
  );
}

export default App;
