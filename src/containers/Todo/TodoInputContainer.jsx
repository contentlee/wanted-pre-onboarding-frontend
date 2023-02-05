import { useContext } from "react";

import { https } from "../../lib/https";

import { BtnComponent, InputComponent } from "../../components";
import { TodoListContext } from "../../contexts/TodoContext";

const TodoInputContainer = () => {
  const { renderingToggle, setRenderingToggle } = useContext(TodoListContext);
  const handleCreateSubmit = (e) => {
    e.preventDefault();
    https
      .post("/todos", { todo: e.target[0].value })
      .then((res) => {
        setRenderingToggle(!renderingToggle);
        e.target[0].value = "";
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <form onSubmit={handleCreateSubmit}>
      <InputComponent props={{ test_id: "new-todo-input" }} />
      <BtnComponent props={{ test_id: "new-todo-add-button", name: "추가", type: "submit" }} />
    </form>
  );
};

export default TodoInputContainer;
