import { useContext, useState } from "react";
import Header from "../Header";

import PlanCard from "./PlanCard";
import Alert from "../../alert/Alert";
import { nanoid } from "nanoid";
import {
  incrementStepContext,
  decrementStepContext,
  userDataContext,
  setUserDataContext,
} from "../../../App";

export default function SelectPlan() {
  const incrementStep = useContext(incrementStepContext);
  const decrementStep = useContext(decrementStepContext);

  const userData = useContext(userDataContext);
  const setUserData = useContext(setUserDataContext);

  const [alert, setAlert] = useState(false);
  const headerData = {
    title: "Select Your Plan",
    description: "You have the option of monthly or yearly billing.",
  };

  function handleSelected(index) {
    setUserData((prevData) => {
      return prevData.map((arr, arrIndex) => {
        if (arrIndex === 2) {
          return arr.map((planObj, objIndex) => {
            if (index === objIndex) {
              return {
                ...planObj,
                isSelected: true,
              };
            } else {
              return {
                ...planObj,
                isSelected: false,
              };
            }
          });
        } else {
          return arr;
        }
      });
    });
  }

  function togglePlan() {
    setUserData((prevData) => {
      return prevData.map((arr, arrIndex) => {
        if (arrIndex === 0) {
          return { ...arr, isMonthlyActive: !arr.isMonthlyActive };
        } else {
          return arr;
        }
      });
    });
  }

  function checkAnyPlanSelected() {
    if(
      userData[2].some(planObj=>planObj.isSelected)
    ){
      incrementStep();
    }else{
      setAlert(true);
    }
  }
  

  // written in refactoring
  return (
    <div className="container" id="selectPlan">
      {
        alert && 
        <Alert text="Choose Your Plan !" handleClick={()=>setAlert(false)} />
      }
    
      <Header {...headerData} />
      <div className="plan">
        <div className="plan-card-container">
          {userData[2].map((data, index) => {
            return (
              <PlanCard
                {...data}
                {...userData[0]}
                key={nanoid(10)}
                clickHandler={() =>{
                  
                  return handleSelected(index)
                }
                }
              />
            );
          })}
        </div>
        <div className="toggle-plan">
          <span>Monthly</span>
          <div className="toggler" onClick={togglePlan}>
            <div className="inner">
              <div
                className={
                  userData[0].isMonthlyActive ? "circle" : "circle to-right"
                }
              ></div>
            </div>
          </div>
          <span>Yearly</span>
        </div>
      </div>
      <footer>
        <button className="go-back btn" onClick={decrementStep}>
          Go Back
        </button>

        <button className="next-step btn" onClick={checkAnyPlanSelected}>
          Next Step
        </button>
      </footer>
    </div>
  );
}
