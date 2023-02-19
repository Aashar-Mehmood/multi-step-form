import { useContext, useState } from "react";
import {
  currentStepContext,
  incrementStepContext,
  decrementStepContext,
} from "../../App";
export default function Footer(props) {
  const validationFunc = props.handleValidation;
  const [dataValidated, setDataValidated] = useState(false);
  let currentStep = useContext(currentStepContext);
  let incrementStep = useContext(incrementStepContext);
  let decrementStep = useContext(decrementStepContext);
  return (
    <footer>
      {currentStep > 1 && (
        <button className="go-back btn" onClick={decrementStep}>
          Go Back
        </button>
      )}

      <button
        className={currentStep === 1 ? "next-step btn end" : "next-step btn"}
        onClick={() => {
          setDataValidated(validationFunc());
          if (dataValidated) {
            incrementStep();
          }
        }}
      >
        {currentStep === 4 ? "Confirm" : "Next Step"}
      </button>
    </footer>
  );
}
