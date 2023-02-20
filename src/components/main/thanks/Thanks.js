import thanksIcon from "../../../assets/images/icon-thank-you.svg";
import { useContext } from "react";
import { userDataContext } from "../../../App";
export default function Thanks() {
  const userData = useContext(userDataContext);
  let userName = userData[1][0].value;
  return (
    <div className="container">
        <div className="thanks" >
      <div className="icon">
        <img src={thanksIcon} alt="Thank You" />
      </div>
      <h1>Thank You !</h1>
      <p>
        Thanks {userName} for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
    </div>
    
  );
}
