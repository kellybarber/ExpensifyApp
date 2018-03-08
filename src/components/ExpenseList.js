import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense, index) => {
      return <ExpenseListItem key={index} expense={expense} />
    })}
  </div>  
)

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseList)


// const ConnectedExpenseList = connect((state) => {
//   return {
//     expenses: state.expenses
//   }
// })(ExpenseList)
// export default ConnectedExpenseList