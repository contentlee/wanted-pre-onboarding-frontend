import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { SignInContainer, SignUpContainer, TodoContainer } from "../containers";

import { SignInContext } from "../contexts/MainContext";

const UserPage = () => {
  const navigate = useNavigate();

  const { signedIn } = useContext(SignInContext);

  useEffect(() => {
    signedIn ? navigate("/todo") : navigate("/signin");
  }, [signedIn]);

  if (signedIn) {
    return (
      <Routes>
        <Route index path="/todo" element={<TodoContainer />}></Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route index path="/signin" element={<SignInContainer />} />
      <Route path="/signup" element={<SignUpContainer />} />
    </Routes>
  );
};

export default UserPage;
