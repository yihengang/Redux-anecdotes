import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import reducer from "./reducers/anecdoteReducer";

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const renderApp = () => {
//   root.render(<App />);
// };
// renderApp();
// store.subscribe(renderApp);

{
  /* <div>
<h2>Anecdotes</h2>
{anecdotes.map((anecdote) => (
  <div key={anecdote.id}>
    <div>{anecdote.content}</div>
    <div>
      has {anecdote.votes}
      <button onClick={() => vote(anecdote.id)}>vote</button>
    </div>
  </div>
))}
<h2>create new</h2>
<form>
  <div>
    <input />
  </div>
  <button>create</button>
</form>
</div> */
}
