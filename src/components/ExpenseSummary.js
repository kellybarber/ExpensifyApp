import React from 'react'
import { connect } from 'react-redux'
import getExpensesTotal from '../selectors/expenses-total'
import getVisibleExpenses from '../selectors/expenses'

const ExpenseSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {expensesTotal}
      </h1>
    </div>
  )
}

const mapStateToProps = state => ({
  expenseCount: getVisibleExpenses(state.expenses, state.filters).length,
  expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
})

export default connect(mapStateToProps)(ExpenseSummary)