export default function AddOn(props){
    const {heading, description, price, isSelected, isMonthlyActive} = props;
    return(
        <div className="addOn">
        <input type="checkbox" name="online-service" id="online-service" />
        <div>
            <h3 className="heading">{heading}</h3>
            <p className="description">{description}</p>
        </div>
        <p className="price">
        {
          isMonthlyActive ? `$${price.monthly}/mo` : `$${price.yearly}/yr`
        }
        </p>
    </div>
    );
    
}