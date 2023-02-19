import { useContext } from "react";
import { incrementStepContext, decrementStepContext } from "../../../App";
export default function Summary() {
  const incrementStep = useContext(incrementStepContext);
  const decrementStep = useContext(decrementStepContext);
  return (
    <div>
      <h2>Summary Page</h2>
      <footer>
        <button className="go-back btn" onClick={decrementStep}>
          Go Back
        </button>

        <button className="next-step btn" onClick={incrementStep}>
          Next Step
        </button>
      </footer>
    </div>
  );
}
