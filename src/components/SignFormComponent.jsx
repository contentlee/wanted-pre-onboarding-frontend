import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;

  div {
    display: flex;
    justify-content: center;
  }
`;

const SignFormComponent = ({ children, props: { fn } }) => {
  return <Form onSubmit={fn}>{children}</Form>;
};

export default SignFormComponent;
