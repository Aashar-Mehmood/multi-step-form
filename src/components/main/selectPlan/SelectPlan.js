import { useContext } from "react";
import Header from "../Header";
import PlanCard from "./PlanCard";
import { nanoid } from "nanoid";
import { incrementStepContext, decrementStepContext } from "../../../App";

export default function SelectPlan() {
  const incrementStep = useContext(incrementStepContext);
  const decrementStep = useContext(decrementStepContext);

  const headerData = {
    title: "Select Your Plan",
    description: "You have the option of monthly or yearly billing.",
  };
  const planCardData = [
    {
      icon: "iconImageSrc",
      label: "Arcade",
      price: "10$",
    },
    {
      icon: "iconImageSrc",
      label: "Advance",
      price: "20$",
    },
    {
      icon: "iconImageSrc",
      label: "Pro",
      price: "30$",
    },
  ];

  return (
    <div className="container" id="selectPlan">
      <Header {...headerData} />
      <div className="plan">
        <div className="plan-card-container">
          {planCardData.map((data) => {
            return <PlanCard {...data} key={nanoid(10)} />;
          })}
        </div>
        <div className="change-plan"></div>
      </div>

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
