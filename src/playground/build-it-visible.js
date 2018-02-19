// My Solution
// const app = {
//   title: 'Visibility Toggle',
//   text: ''
// }
//
// const showText = () => {
//   !app.text ? app.text = 'Wow, text!' : app.text = ''
//   render()
// }
//
// const render = () => {
//   const visible = (
//     <div>
//       <h1>{app.title}</h1>
//       <button onClick={showText}>{!app.text ? "Show Invisible Text" : "Hide Invisible Text"}</button>
//       <p>{app.text}</p>
//     </div>
//   )
//   ReactDOM.render(visible, appRoot)
// }
//
// const appRoot  = document.getElementById('app')
// render()




// Tutorial Solution
let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
