import uuid from 'uuid'
import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense 
})

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0 
    } = expenseData

    database.ref('expenses')
      .push({ description, note, amount, createdAt })
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expenseData
        }))
      })

  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = ({ id }) => {
  return (dispatch) => {
    database.ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }))
      })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    database.ref(`expenses/${id}`)
    .update({
      ...updates
    })
    .then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenses = []

        snapshot.forEach((expense) => {
          expenses.push({
            id: expense.key,
            ...expense.val()
          })
        })

        dispatch(setExpenses(expenses))
      })
  }
}