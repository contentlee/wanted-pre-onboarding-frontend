import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import TodoContainer from "../containers/Todo";

const UserPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/todo");
  }, []);

  return (
    <Routes>
      <Route index path="/todo" element={<TodoContainer />}></Route>
    </Routes>
  );
};

export default UserPage;
