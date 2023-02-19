export default function PlanCard(props) {
  const { icon, label, price, clickHandler } = props;
  return (
    <div className="plan-card" onClick={clickHandler}>
      <div className="icon">
        <img src={icon} alt={label} />
      </div>
      <h3 className="label">{label}</h3>
      <p className="price">{price}</p>
    </div>
  );
}
