export default function PlanCard(props) {
  const { icon, label, price } = props;
  return (
    <div className="plan-card">
      <div className="icon">{icon}</div>
      <h3 className="label">{label}</h3>
      <p className="price">{price}</p>
    </div>
  );
}
