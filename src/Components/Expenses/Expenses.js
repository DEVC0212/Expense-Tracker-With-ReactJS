import React, { useState,useEffect} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  console.log('In Expenses.js');
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear());

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const deleteExpenseHandler = (id) => {
    props.onDelete(id)
  }

  let filteredExpenses = props.items.filter(expense => {
    const date = new Date(expense.date);

    if (date instanceof Date && !isNaN(date)) {
      return date.getFullYear().toString() === filteredYear.toString();
    }

    return false;
  });

  useEffect(() => {
    filteredExpenses = props.items.filter(expense => {
      const date = new Date(expense.date);

      if (date instanceof Date && !isNaN(date)) {
        return date.getFullYear().toString() === filteredYear.toString();
      }

      return false;
    });
  }, [props.items, filteredYear]);

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} onDelete={deleteExpenseHandler} />
      </Card>
    </div>
  );
};

export default Expenses;
