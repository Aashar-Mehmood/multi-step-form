export default function AddOn(props){
    const {
        heading, description, price, 
        isSelected, isMonthlyActive, clickHandler,
        handleCheckBoxChange
    } = props;
    return(
        <div className={isSelected ? "addOn selected" : "addOn" } onClick={clickHandler}>
        <input onChange={handleCheckBoxChange} checked={isSelected} type="checkbox" name={heading} id={heading} />
        <div>
            <h4 className="heading">{heading}</h4>
            <p className="description">{description}</p>
        </div>
        <p className="price">
        {
          isMonthlyActive ? `+$${price.monthly}/mo` : `+$${price.yearly}/yr`
        }
        </p>
    </div>
    );
    
}