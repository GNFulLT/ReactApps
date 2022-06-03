import React from "react";

import "./NewExpense.css"

import ExpenseForm from  "./ExpenseForm"

const NewExpense = ( props ) =>
{
    const SubmitHandler = ( newExpenseData ) =>
    {
        const expenseData = {
            ...newExpenseData,
            id: Math.floor((Math.random()*100)+1).toString()
        };
        props.onExpenseDataCreated(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSubmit={SubmitHandler}></ExpenseForm>
        </div>

    );
}

export default NewExpense;