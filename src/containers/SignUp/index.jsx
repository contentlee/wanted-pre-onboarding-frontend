import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { https } from "../../lib/https";

import { BtnComponent, InputComponent } from "../../components";

const SignUpContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleEmailOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (!value.includes("@")) {
      setEmail("");
    } else {
      setEmail(value);
    }
  };

  const handlePwdOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (value.length < 8) {
      setPwd("");
    } else {
      setPwd(value);
    }
  };

  const handleBackOnClick = () => {
    navigate("/signin");
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    https
      .post("/auth/signup", {
        email: email,
        password: pwd,
      })
      .then(() => {
        console.log("Success SignUp");
        navigate("/signin");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <form onSubmit={handleFormOnSubmit}>
      <InputComponent
        props={{ test_id: "email-input", type: "email", placeholder: "E-mail", fn: handleEmailOnChange }}
      />
      <InputComponent
        props={{
          test_id: "password-input",
          type: "password",
          placeholder: "Password",
          fn: handlePwdOnChange,
        }}
      />

      <BtnComponent props={{ test_id: "signup-button", name: "회원가입", type: "submit", disabled: !(email && pwd) }} />
      <BtnComponent props={{ name: "돌아가기", fn: handleBackOnClick }} />
    </form>
  );
};

export default SignUpContainer;
