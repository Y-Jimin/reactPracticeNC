import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => {setTodo(event.target.value)}
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo == "") {
      return;
    }
    setTodo("");
    setTodos((currentArray) => [todo, ...currentArray]);
  }
  console.log(todos)
  return (
    <div>
      <h1>Your To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={onChange}
          value={todo}
          placeholder="write your todo" />
        <button>Add to todos</button>
      </form>
      <hr/>
      <ul>
        {todos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;