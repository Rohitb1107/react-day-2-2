import { Todo } from "./Todo";

export const TodoItem = ({ todo }) => {
  return (
    <>
      <div className="todo-div">{todo}</div>
      {/* <div>id:{todo.id}</div> */}
      {/* {todo.title} - {todo.status ? "Done" : "Not done"} */}
      {/* <button>Delete</button> */}
      {/* <button>Toggle</button> */}
    </>
  );
};
