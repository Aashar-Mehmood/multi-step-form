import { useContext } from "react";
import InfoForm from "./infoForm/InfoForm";
import SelectPlan from "./selectPlan/SelectPlan";
import AddOns from "./addOns/AddOns";
import Summary from "./summary/Summary";
import Thanks from "./thanks/Thanks";
import { currentStepContext } from "../../App";

export default function Main() {
  const currentStep = useContext(currentStepContext);

  let MainComponet;
  switch (currentStep) {
    case 1:
      MainComponet = InfoForm;
      break;
    case 2:
      MainComponet = SelectPlan;
      break;
    case 3:
      MainComponet = AddOns;
      break;
    case 4:
      MainComponet = Summary;
      break;
    case 5:
      MainComponet = Thanks;
      break;
    default:
      MainComponet = InfoForm;
      break;
  }

  return (
    <main>
      <MainComponet />
    </main>
  );
}
