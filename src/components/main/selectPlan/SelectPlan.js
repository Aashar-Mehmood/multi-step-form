import { useContext } from "react";
import Header from "../Header";
import PlanCard from "./PlanCard";
import { nanoid } from "nanoid";
import { 
  incrementStepContext, 
  decrementStepContext, 
  userDataContext, 
  setUserDataContext 
} from "../../../App";

export default function SelectPlan() {
  const incrementStep = useContext(incrementStepContext);
  const decrementStep = useContext(decrementStepContext);

  const userData = useContext(userDataContext);
  const setUserData = useContext(setUserDataContext);

  const headerData = {
    title: "Select Your Plan",
    description: "You have the option of monthly or yearly billing.",
  };


  function unSelectAll(){

    setUserData(
      (prevData)=>{
        return prevData.map((arr,arrIndex)=>{
          if(arrIndex===1){
            return arr.map((planObj)=>{
              return{
                ...planObj,
                isSelected:false,
              }
            })
          }else{
            return arr;
          }
        })
      }
    );
  }

  function handleSelected(event,index){
    event.stopPropagation();
    setUserData(
      (prevData)=>{
        return prevData.map((arr,arrIndex)=>{
          if(arrIndex===1){
            return arr.map((planObj, objIndex)=>{
              if(index===objIndex){
                return{
                  ...planObj,
                  isSelected:true,
                }
              }else{
                return {
                  ...planObj,
                  isSelected:false
                }
              }
            })
          }else{
            return arr;
          }
        })
      }
    );
  }

  function togglePlan(){
    setUserData(
      (prevData)=>{
        return prevData.map((arr,arrIndex)=>{
          if(arrIndex===1){
            return arr.map((planObj)=>{
              return{
                ...planObj,
                isMonthlyActive: !planObj.isMonthlyActive
              }
            })
          }else{
            return arr;
          }
        })
      }
    );
  }

// written in refactoring
  return (
    <div className="container" id="selectPlan" onClick={unSelectAll}>
      <Header {...headerData} />
      <div className="plan" >
        <div className="plan-card-container">
          {userData[1].map((data, index) => {
            return <PlanCard {...data} key={nanoid(10)} clickHandler = {(event)=>handleSelected(event,index)} />;
          })}
        </div>
        <div className="toggle-plan">
          <span>Monthly</span>
          <div className="toggler" onClick={togglePlan}>
            <div className="inner">
              <div 
              className =
              {
                userData[1][0].isMonthlyActive ? "circle" : "circle to-right"
              }> 
              </div>
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
