import "./ExpenseDate.css"

//Logic

/**
 * 
 * @param {Date} date 
 */
 function GetMonthOfDate(date)
 {
  return date.toLocaleString("en-US",{month:"long"});
 }
 
 /**
  * 
  * @param {Date} date 
  */
 function GetYearOfDate(date)
 {
 return date.getFullYear();
 }
 
 /**
  * 
  * @param {Date} date 
  */
 function GetDayOfDate(date)
 {
 return date.toLocaleString("en-US",{day:"2-digit"});
 }

//React
function ExpenseDate ( props )
{
 return (
    <div className="expense-date">
    <div className="expense-date__month">{GetMonthOfDate(props.date)}</div>
    <div className="expense-date__year">{GetYearOfDate(props.date)}</div>
    <div className="expense-date__day">{GetDayOfDate(props.date)}</div>
  </div>
 );
}

export default ExpenseDate;