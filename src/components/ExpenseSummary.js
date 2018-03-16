import React from 'react'
import { connect } from 'react-redux'
import getExpensesTotal from '../selectors/expenses-total'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseSummary = (props) => (
  <div>
    Expense List Header
    <p>{getExpensesTotal(getVisibleExpenses(props.expenses, props.filters))}</p>
  </div>
)

const mapStateToProps = state => ({
  expenses: state.expenses,
  filters: state.filters
})

export default connect(mapStateToProps)(ExpenseSummary)