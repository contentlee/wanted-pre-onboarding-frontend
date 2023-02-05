import styled from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;

  span {
    width: 100%;
    padding: 0 5px;
    padding-left: 15px;
    font-size: 13px;
  }

  input[type:text] {
    width: 100%;
  }
`;

const Checkbox = styled.input``;

const CheckboxComponent = ({ children, props: { checked, fn = () => {} } }) => {
  return (
    <Label>
      <Checkbox type="checkbox" defaultChecked={checked} onChange={fn} />
      {children}
    </Label>
  );
};

export default CheckboxComponent;
