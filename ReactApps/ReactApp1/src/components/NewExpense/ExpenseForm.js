import React, {useState} from "react";
import "./ExpenseForm.css"


const ExpenseForm = ( props ) =>
{
    /*const [fTitle,setTitle] = useState("");
    const [fAmount,setAmount] = useState("");
    const [fDate,setDate] = useState("");*/

    // eslint-disable-next-line
    const [userInputs,setStates] = useState({
        fTitle:"",
        fAmount:"",
        fDate:"",


    });

    const [isAdding,setIsAdding] = useState(true);

    /**
     * 
     * @param {Event} event 
     */
    const TitleChangeHandler = ( event ) => 
    {
        console.log("Updated Title by : "+event.target.value);
        setStates((lastState) => {
            return {
                ...lastState,
                fTitle:event.target.value
            }
           
        });
    }
    /**
     * 
     * @param {Event} event 
     */
    const AmountChangeHandler = ( event ) => 
    {        
        console.log("Updated Amount by : "+event.target.value);
        setStates((lastState) => {
            return {
                ...lastState,
                fAmount:event.target.value
            }
           
        });

    }
    /**
    * 
    * @param {Event} event 
    */
    const DateChangeHandler = ( event ) => 
    {
        console.log("Updated Date by : "+event.target.value);
        setStates((lastState) => {
            return {
                ...lastState,
                fDate:event.target.value
            }
           
        });

    }

    /**
    * 
    * @param {Event} event 
    */
    const SubmitHandler = ( event ) => 
    {
        event.preventDefault();
        const newExpense = {
            title:userInputs.fTitle,
            amount:+userInputs.fAmount,
            date:new Date(userInputs.fDate)
        };
        setStates((lastState) => {
            return {
                ...lastState,
                fTitle: "",
                fAmount: "",
                fDate: ""
            }
        });

        props.onSubmit(newExpense);
    }

    const CancelClickHandler = ( event) => 
    {
        setIsAdding(true);
    }

    const AddNewExpenseClickHandler = () => 
    {
        setIsAdding(false);
    }
    if(!isAdding)
    return (
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInputs.fTitle} onChange={TitleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInputs.fAmount} onChange={AmountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={userInputs.fDate} onChange={DateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={CancelClickHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

    return( 
        <div className="new-expense__first">
            <button type="button" onClick={AddNewExpenseClickHandler}>Add New Expense</button>

        </div>

    )
}

export default ExpenseForm;