import Customer from "./Customer"
import styles from "./Customers.module.css"
const Customers = ( props ) =>
{
    return(
        <div className={`${styles["customer-list"]}`}>
            {props.dataPoints.map((dataPoint) => {return <Customer name={dataPoint.Name} age={dataPoint.Age}></Customer>})}
        </div>
    );
}


export default Customers;