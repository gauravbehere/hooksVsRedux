import React from "react";
import { TodoContextProvider } from "./context-providers/todo-context";
import { Todo } from "./components/todos";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    </div>
  );
}

export default App;
