import Header from "../Header";
import Footer from "../Footer";
import PlanCard from "./PlanCard";
import { nanoid } from "nanoid";
export default function SelectPlan() {
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

      <Footer />
    </div>
  );
}
