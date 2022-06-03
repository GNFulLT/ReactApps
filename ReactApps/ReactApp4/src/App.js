import React from 'react';

import styles from "./App.module.css";

import Navbar from "./Components/Navbar";
function App() {
  return (
    <div>
      <header id={`${styles["header"]}`}>
      <Navbar></Navbar>
      </header>
    </div>
  );
}

export default App;
