import React, { useState, useEffect } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const getLocalItems = () => {
  let list = localStorage.getItem('Expenses');

  if (list) {
    list = JSON.parse(list);
    list = list.map(item => {
      return {
        ...item,
        date: new Date(item.date)
      };
    });
    return list;
  } else {
    return [];
  }
}

function App() {
  console.log('In App.js');
  const [newExpense, setNewExpense] = useState(getLocalItems());

  useEffect(() => {
    localStorage.setItem('Expenses', JSON.stringify(newExpense));
  }, [newExpense]);

  const addExpenseHandler = expense => {
    setNewExpense(prevExpense => {
      return [expense, ...prevExpense];
    });
  };

  const deleteExpenseHandler = (id) => {
    const updatedExpenses = newExpense.filter(expense => expense.id !== id);
    setNewExpense(updatedExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={newExpense} onDelete={deleteExpenseHandler} />
    </div>
  );
}

export default App;
