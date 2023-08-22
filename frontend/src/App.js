import { useState, useEffect } from "react";
import Todo from "./components/todo"
import { getAllToDo } from "./utils/handle-api";

function App() {

  const[toDo, setTodo] = useState([])

  useEffect(() => {
    getAllToDo(setTodo)
  }, [])

  return (
    <div className="App">

      <div className="container">
        <h1>todo app</h1>

        <div className="top">
          <input type="text" placeholder="Add todos" />
          <div className="add">Add</div>
        </div>

        <div className="list">

          {toDo.map((item) => <Todo key={item._id} text={item.text} />)}

            <Todo text="doc appointment"></Todo>
            <Todo text="grocery"></Todo>
            <Todo text="laundry"></Todo>
        </div>

      </div>
      
    </div>
  );
}

export default App;
