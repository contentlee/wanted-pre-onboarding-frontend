import styled from "styled-components";

const Input = styled.input``;

const InputComponent = ({
  props: { test_id = "", default_value = "", placeholder = "", type = "", fn = () => {} },
}) => {
  return (
    <Input data-testid={test_id} type={type} defaultValue={default_value} placeholder={placeholder} onChange={fn} />
  );
};

export default InputComponent;
