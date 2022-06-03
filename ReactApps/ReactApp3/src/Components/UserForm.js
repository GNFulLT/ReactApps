import styles from "./UserForm.module.css"
import Button from "./Button"

import {useState} from "react"; 

const UserForm = ( props ) =>
{
    const [name,setName] = useState("");

    const [age,setAge] = useState("");

    /**
     * 
     * @param {Event} event 
     */
    const ButtonClickHandler = ( event ) =>
    {
        event.preventDefault();
        var infos = {Name:name,Age:age};
        props.onCustomerInfosTaken(infos);
        setAge("");
        setName("");
    }

    const AgeChangedHandler = ( event ) =>
    {
        setAge(event.target.value);
    }

    const NameChangedHandler = ( event ) =>
    {
        setName(event.target.value);
    }

    return(
         <form>
             <div className={`${styles["form-control"]}`}>
                <input value={age} onChange={AgeChangedHandler} type="number" input="ageInput"></input>
                <label>Age</label>
                <input value={name} onChange={NameChangedHandler} id="nameInput"></input>
                <label>Name</label>
                
             </div>
             <Button type="submit" onClick={ButtonClickHandler}>Confirm</Button>
        </form>
    );
}

export default UserForm;