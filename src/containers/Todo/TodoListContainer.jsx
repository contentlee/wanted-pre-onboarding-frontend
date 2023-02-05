import { useContext } from "react";

import { TodoListContext } from "../../contexts/TodoContext";
import TodoElementContainer from "./TodoElementContainer";

import styled from "styled-components";

const List = styled.ul`
  margin: 5px;
  padding: 5px;

  list-style: none;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 28px;
  }

  div {
    display: flex;
  }
`;

const TodoListContainer = () => {
  const { todos } = useContext(TodoListContext);

  return (
    <List>
      {todos?.map((item) => (
        <TodoElementContainer key={item.id} item={item} />
      ))}
    </List>
  );
};

export default TodoListContainer;
