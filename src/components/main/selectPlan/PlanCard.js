export default function PlanCard(props) {
  const { 
    icon, name, price, 
    isSelected, isMonthlyActive, clickHandler 
  } = props;
  
  return (
    <div className={isSelected ? "plan-card selected" : "plan-card" }  onClick={clickHandler}>
      <div className="icon">
        <img src={icon} alt={name} />
      </div>
      <h3 className="label">{name}</h3>
      <p className="price">
        {
          isMonthlyActive ? `$${price.monthly}/mo` : `$${price.yearly}/yr`
        }
      </p>
      {
        !isMonthlyActive ? <p>2 months free</p> : ""
      }
    </div>
  );
}
