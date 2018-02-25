import React from 'react'
import { 
  BrowserRouter, 
  Route, 
  Switch, 
  Link, 
  NavLink 
} from 'react-router-dom'

const ExpenseDashboardPage = () => (
  <p>
    This is from my dashboard component
  </p>
)

const AddExpensePage = () => (
  <p>
    This is from my add expense component
  </p>
)

const EditExpensePage = () => (
  <p>
    This is from my edit expense component  
  </p> 
)

const HelpPage = () => (
  <p>
    This is from my help page
  </p>
)

const NotFoundPage = () => (
  <p>
    404 - <Link to="/">Go Back Home</Link>
  </p>
)


const AppRouter = () => (
  <BrowserRouter>
  <div>
    <Header/>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} /> 
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
</BrowserRouter>
)
export default AppRouter