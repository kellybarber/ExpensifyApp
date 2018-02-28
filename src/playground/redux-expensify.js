import { createStore, combineReducers } from 'redux'

// ADD_EXPENSE
const addExpense = () => ({
  type: 'ADD_EXPENSE',
  expense: {
    
  }
})

// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


const expensesReducerDefaultState = []
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', 
  startDate: undefined,
  endDate: undefined
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default: 
      return state
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filter: filterReducer
  })
)

console.log(store.getState())


const demoState = {
  expenses: [{
    id: 'failnfe',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}