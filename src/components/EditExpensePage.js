import React from 'react'

const EditExpensePage = (props) => (
  <p>
    Editing Expense ID: {props.match.params.id}
  </p> 
)
export default EditExpensePage