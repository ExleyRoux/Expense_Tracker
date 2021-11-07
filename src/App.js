import React from "react";
import './App.css';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList'

function App() {
  return (
    <div>
      <Header></Header>
      <Balance></Balance>
      <IncomeExpense></IncomeExpense>
      <TransactionList></TransactionList>
    </div>
  )
}

export default App;
