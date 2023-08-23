import { useState, useEffect } from "react";
import Todo from "./components/todo"
import { addTodo, getAllToDo } from "./utils/handle-api";

function App() {

  //use state is a setter
  const [toDo, setTodofromState] = useState([])
  const [text, setText] = useState("")
  const [test, setTest] = useState('test from state') //setTest('my new value') to use as setter


  //aka connectedCallback()
  useEffect(() => {
    getAllToDo(setTodofromState)
  }, [])

  return (
    <div className="App">
      {/* <h2>{test}</h2> */}
      
      <div className="container">
        <h1>todo app</h1>

        <div className="top">
          <input 
          type="text" 
          placeholder="Add todos" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          />

          <div className="add" 
          onClick={() => addTodo(text, setText,setTodofromState )}>Add</div>
        </div>

        <div className="list">

          {toDo.map((item) => <Todo key={item._id} text={item.text} />)}

            <Todo text="[hardcode] doc appointment"></Todo>
            <Todo text="[hardcode] grocery"></Todo>
            <Todo text="[hardcode] laundry"></Todo>
        </div>

      </div>
      
    </div>
  );
}

export default App;
