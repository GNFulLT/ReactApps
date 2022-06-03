import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "../UI/Card"


function ExpenseItem ( props ) {
  
  return (
    <li>
    <Card className="expanse-item">
     <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expanse-item__description">
          <h2>{props.title}</h2>
          <div className="expanse-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;
