import arcadeIcon from  "./assets/images/icon-arcade.svg";
import advanceIcon from  "./assets/images/icon-advanced.svg";
import proIcon from  "./assets/images/icon-pro.svg";

import Aside from "./components/aside/Aside";
import Main from "./components/main/Main";
import "./App.css";
import { useState, createContext } from "react";
export const currentStepContext = createContext();
export const incrementStepContext = createContext();
export const decrementStepContext = createContext();

export const userDataContext = createContext();
export const setUserDataContext = createContext();
// user data
const userData = [
  [
    {
      name: "name",
      value: "",
      isFilled: false,
      hasCorrectFormat: true,
    },
    {
      name: "email",
      value: "",
      isFilled: false,
      hasCorrectFormat: false,
    },
    {
      name: "phone",
      value: "",
      isFilled: false,
      hasCorrectFormat: false,
    },
  ],
  [
    {
      icon:arcadeIcon,
      name:"Arcade",
      isSelected:false,
      isMonthlyActive:true,
      price:{
        monthly:9,
        yearly:90
      }
    },
    {
      icon:advanceIcon,
      name:"Advance",
      isSelected:false,
      isMonthlyActive:true,
      price:{
        monthly:12,
        yearly:120
      }
    },
    {
      icon:proIcon,
      name:"Pro",
      isMonthlyActive:true,
      isSelected:false,
      price:{
        monthly:15,
        yearly:150
      }
    },
  ],
];

// now in main

function App() {
  const [currentStep, setCurrentStep] = useState(2);
  const [data, setData] = useState(userData);

  const incrementStep = () => {
    setCurrentStep((prevStep) => {
      return prevStep <= 3 ? prevStep + 1 : 1;
    });
  };
  const decrementStep = () => {
    setCurrentStep((prevStep) => {
      return prevStep > 1 ? prevStep - 1 : 1;
    });
  };
  return (
    <div className="app">
      <currentStepContext.Provider value={currentStep}>
        <incrementStepContext.Provider value={incrementStep}>
          <decrementStepContext.Provider value={decrementStep}>
            <userDataContext.Provider value={data}>
              <setUserDataContext.Provider value={setData}>
                <Aside />
                <Main />
              </setUserDataContext.Provider>
            </userDataContext.Provider>
          </decrementStepContext.Provider>
        </incrementStepContext.Provider>
      </currentStepContext.Provider>
    </div>
  );
}

export default App;
