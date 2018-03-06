import React              from 'react'
import ReactDOM           from 'react-dom'
import AppRouter          from './routers/AppRouter'
import configureStore     from './store/configureStore'
import { addExpense }     from './actions/expenses'
import { setTextFilter }  from './actions/filters'
import expensesReducer    from './reducers/expenses'
import filtersReducer     from './reducers/filters'
import getVisibleExpenses from './selectors/expenses'
import './styles/styles.scss'
import 'normalize.css/normalize.css'

const store = configureStore()

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

store.dispatch(addExpense({ description: 'Water Bill', amount: 3000, createdAt: 21000 }))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 5000, createdAt: 20000 }))

store.dispatch(setTextFilter( 'bill' ))


ReactDOM.render(<AppRouter/>, document.getElementById('app'));
