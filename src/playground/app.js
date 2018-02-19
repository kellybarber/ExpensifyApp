console.log("app.js is running");

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!',
  options: []

}

const onRemoveAll = () => {
  app.options = []
  render()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option    = app.options[randomNum]
  alert(option)
}

const onFormSubmit = (e) => {
  e.preventDefault()

  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = ''
    render()
  }
}

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here Are Your Options:' : 'No Options Available'}</p>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map((option) => <li key={option}>{option}</li> )}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

const appRoot  = document.getElementById('app')
render()
