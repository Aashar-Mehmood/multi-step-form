import { useContext, useState } from "react";
import Header from "../Header";
import PlanCard from "./PlanCard";
import { nanoid } from "nanoid";
import { 
  incrementStepContext, 
  decrementStepContext, 
  userDataContext, 
  setUserDataContext 
} from "../../../App";
import arcadeIcon from  "../../../assets/images/icon-arcade.svg";
import advanceIcon from  "../../../assets/images/icon-advanced.svg";
import proIcon from  "../../../assets/images/icon-pro.svg";
export default function SelectPlan() {
  const incrementStep = useContext(incrementStepContext);
  const decrementStep = useContext(decrementStepContext);

  const userData = useContext(userDataContext);
  const setUserData = useContext(setUserDataContext);

  const headerData = {
    title: "Select Your Plan",
    description: "You have the option of monthly or yearly billing.",
  };


  const cardData = [
    {
      icon: arcadeIcon,
      label: "Arcade",
      price: userData[1][0].active ? "$9/mo" : "$90/yr",
    },
    {
      icon: advanceIcon,
      label: "Advance",
      price: userData[1][0].active ? "$12/mo" : "$120/yr",
    },
    {
      icon: proIcon,
      label: "Pro",
      price: userData[1][0].active ? "$16/mo" : "$150/yr",
      
    },
  ];

  const [planCardData, setPlanCardData] = useState(cardData);  

  function handleSelected(index){
    console.log(index)
  }
// written in refactoring
  return (
    <div className="container" id="selectPlan">
      <Header {...headerData} />
      <div className="plan">
        <div className="plan-card-container">
          {planCardData.map((data, index) => {
            return <PlanCard {...data} key={nanoid(10)} clickHandler = {()=>handleSelected(index)} />;
          })}
        </div>
        <div className="toggle-plan">
          <span>Monthly</span>
          <div className="toggler">
            <div className="inner">
              <div className="circle"></div>
            </div>
          </div>
          <span>Yearly</span>
        </div>
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
