import Header from "../Header";
import Footer from "../Footer";
import { useContext, useState } from "react";
import { userDataContext, setUserDataContext } from "../../../App";


export default function InforForm() {
  const userData = useContext(userDataContext);
  const setUserData = useContext(setUserDataContext);
  const [nextBtnClicked, setNextBtnClicked] = useState(false);
  function validateForm() {
    setNextBtnClicked(true);
    
    if (formData.every((data) => data.value.length > 0)) {
      return true;
    } else {
      return false;
    }
  }
  const [formData, setFormData] = useState(userData[0]);
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return prevData.map((dataObj) => {
        if (dataObj.name === name) {
          return {
            ...dataObj,
            value: value,
          };
        } else {
          return dataObj;
        }
      });
    });
  }
  const headerData = {
    title: "Personal info",
    description: "Please provide your name, email address, and phone number.",
  };
  return (
    <div className="container" id="infoForm">
      <Header {...headerData} />
      formData
      <div className="form">
        <form>
          <div>
            <label htmlFor="name">
              Name
              {nextBtnClicked && formData[0].value.length === 0 && (
                <span className="required">
                  This field is required
                </span>
              )}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g Aashar Mehmmod"
              value={formData[0].value}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="email">
              Email Address
              {nextBtnClicked && formData[1].value.length === 0 && (
                <span className="required">This field is required</span>
              )}{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="e.g aashar@gmail.com"
              value={formData[1].value}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div>
            <label htmlFor="phone">
              Phone Number
              {nextBtnClicked && formData[2].value.length === 0 && (
                <span className="required">This field is required</span>
              )}{" "}
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="e.g +1 234 5678 9"
              value={formData[2].value}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
      </div>
      <Footer handleValidation={validateForm} />
    </div>
  );
}
