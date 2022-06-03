import styles from "./Customer.module.css"

const Customer = ( props ) => 
{
    return(
        <div className={`${styles["container"]}`}>
            <label>{props.name}({props.age} is years old)</label>
        </div>
    );
}

export default Customer;