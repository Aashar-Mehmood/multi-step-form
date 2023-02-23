import { useContext } from "react";
import { nanoid } from "nanoid";
import { stepContext, userDataContext } from "../../../App";

import Header from "../Header";
import AddOn from "./AddOn";

export default function AddOns() {
  const { incrementStep, decrementStep } = useContext(stepContext);
  const { userData, setUserData } = useContext(userDataContext);
  function handleSelected(index) {
    setUserData((prevData) => {
      return prevData.map((arr, arrIndex) => {
        if (arrIndex === 3) {
          return arr.map((addOn, addOnIndex) => {
            if (addOnIndex === index) {
              return {
                ...addOn,
                isSelected: !addOn.isSelected,
              };
            } else {
              return addOn;
            }
          });
        } else {
          return arr;
        }
      });
    });
  }
  function handleCheckBox() {
    return;
  }
  const headerData = {
    title: "Pick add-ons",
    description: "Add-ons help enhance your gaming experience.",
  };
  return (
    <div className="container">
      <Header {...headerData} />
      <div className="add-ons-container">
        {userData[3].map((data, index) => {
          return (
            <AddOn
              {...data}
              {...userData[0]}
              key={nanoid(10)}
              clickHandler={() => handleSelected(index)}
              handleCheckBoxChange={handleCheckBox}
            />
          );
        })}
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
