import React, { useEffect, useState } from "react";
import { https } from "../lib/https";

export const TodoListContext = React.createContext({
  todos: [],
  setTodos: () => {},
  renderingToggle: true,
  setRenderingToggle: () => {},
});

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [renderingToggle, setRenderingToggle] = useState(true);

  useEffect(() => {
    https
      .get("/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  }, [renderingToggle]);

  return (
    <TodoListContext.Provider value={{ todos, setTodos, renderingToggle, setRenderingToggle }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoContext;
