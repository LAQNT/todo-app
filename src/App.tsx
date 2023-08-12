import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: "Laura",
  age: 30,
};

let lotsOfPeople: Person[];

// function printName(name: string) {
//   console.log(name);
// }

// printName("laura");

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <h1>Tasks</h1>

      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* {todos.map((t) => (
        <li key={t.id}>{t.todo}</li>
      ))} */}

      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
