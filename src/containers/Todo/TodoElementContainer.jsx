import { useContext } from "react";
import { useEffect, useState } from "react";

import { https } from "../../lib/https";

import { CheckboxComponent, BtnComponent, InputComponent } from "../../components";
import { TodoListContext } from "../../contexts/TodoContext";

const TodoElementContainer = ({ item: { id, todo, isCompleted } }) => {
  const { renderingToggle, setRenderingToggle } = useContext(TodoListContext);

  const [changedTodo, setChangedTodo] = useState("");
  const handleTodoOnChange = (e) => {
    e.preventDefault();
    setChangedTodo(e.target.value);
  };

  const [mode, setMode] = useState("basic");
  const handleBasicModeOnClick = () => {
    setMode("basic");
  };
  const handleModifyModeOnClick = () => {
    setMode("modify");
  };

  const handleCheckOnSubmit = (e) => {
    https
      .put(`todos/${id}`, {
        todo: todo,
        isCompleted: e.target.checked,
      })
      .then((res) => {
        setRenderingToggle(!renderingToggle);
        e.target.checked = res.data.isCompleted;
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const handleEditOnSubmit = () => {
    https
      .put(`todos/${id}`, {
        todo: changedTodo,
        isCompleted: isCompleted,
      })
      .then(() => {
        setRenderingToggle(!renderingToggle);
        setMode("basic");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const handleDeleteOnSubmit = () => {
    https
      .delete(`/todos/${id}`)
      .then(() => {
        setRenderingToggle(!renderingToggle);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  useEffect(() => {
    setChangedTodo(todo);
  }, [mode]);

  return (
    <li key={id}>
      <CheckboxComponent
        props={{
          checked: isCompleted,
          fn: handleCheckOnSubmit,
        }}
      >
        {mode === "basic" && <span>{todo}</span>}
        {mode === "modify" && <InputComponent props={{ default_value: todo, fn: handleTodoOnChange }} />}
      </CheckboxComponent>

      {mode === "basic" && (
        <div>
          <BtnComponent props={{ test_id: "modify-button", name: "수정", fn: handleModifyModeOnClick }} />
          <BtnComponent props={{ test_id: "delete-button", name: "삭제", fn: handleDeleteOnSubmit }} />
        </div>
      )}
      {mode === "modify" && (
        <div>
          <BtnComponent props={{ test_id: "submit-button", name: "제출", fn: handleEditOnSubmit }} />
          <BtnComponent props={{ test_id: "cancel-button", name: "취소", fn: handleBasicModeOnClick }} />
        </div>
      )}
    </li>
  );
};

export default TodoElementContainer;
