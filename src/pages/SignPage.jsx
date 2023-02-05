import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import SignInContainer from "../containers/SignIn";
import SignUpContainer from "../containers/SignUp";

const SignPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/signin");
  }, []);
  return (
    <Routes>
      <Route index path="/signin" element={<SignInContainer />} />
      <Route path="/signup" element={<SignUpContainer />} />
    </Routes>
  );
};

export default SignPage;
