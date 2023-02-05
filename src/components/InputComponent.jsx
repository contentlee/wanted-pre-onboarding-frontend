import styled from "styled-components";

const Input = styled.input`
  margin: 5px;
  padding: 0 8px;
  width: 100%;
  height: 24px;
  border: 1px solid gray;
  border-radius: 4px;

  box-sizing: border-box;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px gray;
  }
`;

const InputComponent = ({
  props: { test_id = "", default_value = "", placeholder = "", type = "", fn = () => {} },
}) => {
  return (
    <Input data-testid={test_id} type={type} defaultValue={default_value} placeholder={placeholder} onChange={fn} />
  );
};

export default InputComponent;
