import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import {todos, initState} from "./reducers";
import Todo from "./components/todo";

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(todos, initState, enhancers);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}
export default App;

