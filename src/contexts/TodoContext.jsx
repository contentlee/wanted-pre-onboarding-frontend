import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { https } from "../lib/https";
import { SignInContext } from "./MainContext";

export const TodoListContext = React.createContext({
  todos: [],
  setTodos: () => {},
  renderingToggle: true,
  setRenderingToggle: () => {},
});

const TodoContext = ({ children }) => {
  const { setSignedIn } = useContext(SignInContext);

  const navigate = useNavigate();

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
        if (!localStorage.getItem("token")) {
          setSignedIn(false);
          navigate("/signin");
        }
      });
  }, [renderingToggle]);

  return (
    <TodoListContext.Provider value={{ todos, setTodos, renderingToggle, setRenderingToggle }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoContext;
