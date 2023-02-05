import styled from "styled-components";

import TodoContext from "../../contexts/TodoContext";
import TodoInputContainer from "./TodoInputContainer";
import TodoListContainer from "./TodoListContainer";

const Main = styled.main`
  width: 500px;
`;

const TodoContainer = () => {
  return (
    <Main>
      <TodoContext>
        <TodoInputContainer />
        <TodoListContainer />
      </TodoContext>
    </Main>
  );
};

export default TodoContainer;
