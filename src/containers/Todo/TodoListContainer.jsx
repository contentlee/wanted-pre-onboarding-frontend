import { useContext } from "react";

import { TodoListContext } from "../../contexts/TodoContext";
import TodoElementContainer from "./TodoElementContainer";

const TodoListContainer = () => {
  const { todos } = useContext(TodoListContext);

  return (
    <ul>
      {todos?.map((item) => (
        <TodoElementContainer key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default TodoListContainer;
