import React from 'react'

const ExpenseListItem = (props) => (
  <div>
    <h1>{props.expense.description}</h1>
    <p>{props.expense.amount}</p>
    <p>{props.expense.createdAt}</p>
  </div>
)
export default ExpenseListItem