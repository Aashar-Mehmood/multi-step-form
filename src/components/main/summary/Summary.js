import { useContext, useState } from "react";
import Header from "../Header";
import { 
  incrementStepContext, 
  decrementStepContext,
  userDataContext
} from "../../../App";
import { nanoid } from "nanoid";
export default function Summary() {
  let total = 0;
  const incrementStep = useContext(incrementStepContext);
  const decrementStep = useContext(decrementStepContext);
  const userData = useContext(userDataContext);
  const headerData = {
    title: "Finishing up",
    description: "Double-check everything looks OK before confriming.",
  };
  return (
    <div className="container">
      <Header {...headerData}/>
      <div className="summary">
        
          {
            userData[2].map((planObj)=>{
              if(planObj.isSelected){
                if(userData[0].isMonthlyActive){
                  total += planObj.price.monthly;
                }else{
                  total += planObj.price.yearly;
                }
                return (
                <div className="head" key={nanoid(10)}>
                  <h5 className="plan">
                    {userData[0].isMonthlyActive ? `${planObj.name} (Monthly)` : `${planObj.name} (Yearly)`}
                    </h5>
                  <h5 className="price">
                    {userData[0].isMonthlyActive ? `$${planObj.price.monthly}/mo` : `$${planObj.price.monthly}/yr`}
                  </h5>
                </div>
                )
              }
            })
          }
          
        
        <div className="body">
          
          {
            userData[3].map((addOnObj)=>{
              if(addOnObj.isSelected){
                if(userData[0].isMonthlyActive){
                  total += addOnObj.price.monthly;
                }else{
                  total += addOnObj.price.yearly;
                }
                return (
                <div key={nanoid(10)} className="selectedAddOn">
                  <p className="label">
                    {addOnObj.heading}
                    </p>
                  <p className="price">
                    {userData[0].isMonthlyActive ? `+$${addOnObj.price.monthly}/mo` : `+$${addOnObj.price.monthly}/yr`}
                  </p>
                </div>
                )
              }
            })
          }
           
          
        </div>
        <div className="total">
          <p className="label">
            Total ({userData[0].isMonthlyActive ? 'per month' : 'per year'})
          </p>
          <h4>
            {userData[0].isMonthlyActive ? `$${total}/mo` : `$${total}/yr`}
          </h4>
        </div>
      </div>
      <footer>
        <button className="go-back btn" onClick={decrementStep}>
          Go Back
        </button>

        <button className="next-step btn confirm" onClick={incrementStep}>
          Confirm
        </button>
      </footer>
    </div>
  );
}
