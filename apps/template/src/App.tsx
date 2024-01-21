import { FormContextProvider } from "./context/FormContext";
import "./App.css";
import {
  GeneralInformationDisplay,
  GeneralInformationForm,
} from "./components/GeneralInformation";

function App() {
  return (
    <FormContextProvider>
      <div>
        <div>
          <GeneralInformationForm />
        </div>
        <div>
          <GeneralInformationDisplay />
        </div>
      </div>
    </FormContextProvider>
  );
}

export default App;
