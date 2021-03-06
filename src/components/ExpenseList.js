import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    {props.expenses.length > 0 ? <h1>Expense List</h1> : <p>No Expenses</p>}
    {props.expenses.map((expense, index) => {
      return <ExpenseListItem key={index} {...expense } />
    })}
  </div>  
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
