import { Todo } from "./Todo";

export const TodoItem = ({ todo }) => {
  return (
    <>
      {todo}
      {/* <button>Delete</button> */}
      <button>Toggle</button>
    </>
  );
};
