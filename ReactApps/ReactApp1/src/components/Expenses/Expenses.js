import Card from "../UI/Card"
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

import { useState } from "react";



function Expenses ( props )
{
    
    const [filteredYear,setFilteredYear] = useState("2020");
        // eslint-disable-next-line 
    const [filteredExpenses,setFilteredExpenses] = useState(props.items.filter((expense) => {
        // eslint-disable-next-line
        if(expense.date.getFullYear() == "2020")
            return expense;
    }));

    const FilterValueChangeHandler = ( selectedYear ) =>
    {
        console.log(selectedYear);
        const FiltByYear = ( expense ) =>
        {
            // eslint-disable-next-line
            if(expense.date.getFullYear() == selectedYear)
            {
                return expense;
            }
        }

        setFilteredExpenses(props.items.filter(FiltByYear));
        setFilteredYear(selectedYear);
    }
    return (
     <div>
    <Card className="expenses"> 
    <ExpensesFilter filterValue={filteredYear} onFilterValueChanged = {FilterValueChangeHandler}></ExpensesFilter>
    <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
    <ExpensesList items={filteredExpenses}></ExpensesList>
    

    </Card>
    </div>
    );
}

export default Expenses;