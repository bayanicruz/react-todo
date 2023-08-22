import Todo from "./components/todo"

function App() {
  return (
    <div className="App">

      <div className="container">
        <h1>todo app</h1>

        <div className="top">
          <input type="text" placeholder="Add todos" />
          <div className="add">Add</div>
        </div>

        <div className="list">

            <Todo text="doc appointment"></Todo>
            <Todo text="grocery"></Todo>
            <Todo text="laundry"></Todo>
        </div>

      </div>
      
    </div>
  );
}

export default App;
