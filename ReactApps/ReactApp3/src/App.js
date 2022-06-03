import React from 'react';

import styles from "./App.module.css"

import {useState} from "react"; 

import UserForm from './Components/UserForm';

import Customers from "./Components/Customers";

function App() {
  const[customers,setCustomers] = useState([]);

  const CustomerInfosTakenHandler = ( infos ) => 
  {
    setCustomers((prevCustomers) => 
    {
      var mainInfo = {...infos,id: Math.random().toString()}
      return [...prevCustomers,mainInfo];
    })
  }

  return (
    <div>
      <section className={`${styles["userInput"]}`}>
        <UserForm onCustomerInfosTaken={CustomerInfosTakenHandler}></UserForm>
      </section>

      <section className={`${styles["userInput"]}`}>
      <Customers dataPoints={customers}></Customers>
      </section>
    </div>
  );
}

export default App;
