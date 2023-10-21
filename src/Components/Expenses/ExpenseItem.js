import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  console.log('In ExpenseItem.js');

  const deleteHandler = () => {
    props.onDelete(props.id);
  }

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <button className='expense-item__price' onClick={deleteHandler}>Delete</button> 
          <div className='expense-item__price'>${props.amount}</div> 
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
