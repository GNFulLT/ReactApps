import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"

const INITIAL_EXPANSES = [
  {
    date : new Date(2022,2,10),
    title :"Car Insurance",
    amount : 297.64
  },
    {
    date : new Date(2022,2,11),
    title :"Car Insurance",
    amount : 297.64
  },
  {
    date : new Date(2022,2,12),
    title :"Car Insurance",
    amount : 297.64
  }];

 
function App() {
  
  const [expenses,setExpenses] = useState(INITIAL_EXPANSES);

  const ExpenseDataCreatedHandler = ( expenseData ) =>
  {
    console.log(expenseData);
    setExpenses((prevExpenses) => {
      return ([expenseData,...prevExpenses]);
    })
  };


  return (
    
    <div>

      <h2>Let's get started!</h2>
      <NewExpense onExpenseDataCreated={ExpenseDataCreatedHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
