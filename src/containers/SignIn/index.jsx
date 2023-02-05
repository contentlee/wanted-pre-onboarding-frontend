import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { https } from "../../lib/https";

import { BtnComponent, InputComponent, SignFormComponent } from "../../components";
import { SignInContext } from "../../contexts/MainContext";

const SignInContainer = () => {
  /// 로그인 성공시 todo 페이지 이동
  /// 응답 성공시 JWT는 로컬스토리지에 저장
  const navigate = useNavigate();
  const { setSignedIn } = useContext(SignInContext);

  const handleSignUpOnClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();
    https
      .post("/auth/signin", {
        email: e.target[0].value,
        password: e.target[1].value,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.access_token);
        setSignedIn(true);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <SignFormComponent props={{ fn: handleFormOnSubmit }}>
      <InputComponent props={{ test_id: "email-input", type: "email", placeholder: "E-mail" }} />
      <InputComponent props={{ test_id: "password-input", type: "password", placeholder: "Password" }} />
      <div>
        <BtnComponent props={{ test_id: "signin-button", name: "로그인", type: "submit" }} />
        <BtnComponent props={{ test_id: "signup-button", name: "회원가입", fn: handleSignUpOnClick }} />
      </div>
    </SignFormComponent>
  );
};

export default SignInContainer;
