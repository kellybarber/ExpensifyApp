import numeral from 'numeral'

export default (expenses) => {
  if (expenses.length === 0) {
    return 0
  } else {
    return numeral(expenses
      .map(expense => expense.amount)
      .reduce((accumulator, currentValue) => accumulator + currentValue) 
      / 100
    ).format('$0,0.00')
  }
}