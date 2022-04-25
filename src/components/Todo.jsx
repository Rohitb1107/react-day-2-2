import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import "./Todo.css";

function Todo() {
  const [todosList, setTodosList] = useState([]);

  const getData = (todo) => {
    setTodosList([...todosList, todo]);
  };

  return (
    <div className="list-div">
      <TodoInput getData={getData} />

      <div className="items-div">
        {todosList.map((e) => (
          <TodoItem todo={e}></TodoItem>
        ))}
      </div>
    </div>
  );
}

export { Todo };
