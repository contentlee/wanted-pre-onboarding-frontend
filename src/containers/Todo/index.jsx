import TodoContext from "../../contexts/TodoContext";
import TodoInputContainer from "./TodoInputContainer";
import TodoListContainer from "./TodoListContainer";

const TodoContainer = () => {
  return (
    <main>
      <TodoContext>
        <TodoInputContainer />
        <TodoListContainer />
      </TodoContext>
    </main>
  );
};

export default TodoContainer;
