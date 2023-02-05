import styled from "styled-components";

const Checkbox = styled.input``;

const CheckboxComponent = ({ children, props: { checked, fn = () => {} } }) => {
  return (
    <label>
      <Checkbox type="checkbox" defaultChecked={checked} onChange={fn} />
      {children}
    </label>
  );
};

export default CheckboxComponent;
