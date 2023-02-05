import styled from "styled-components";

const Button = styled.button`
  width: 80px;
  height: 20px;

  border: 1px solid black;
  border-radius: 4px;
  background-color: white;

  &:hover {
    cursor: pointer;

    background-color: red;
    color: white;
    border-color: red;
  }

  &:disabled {
    cursor: default;
    background-color: yellow;

    &:hovoer {
    }
  }
`;

const BtnComponent = ({
  props: { test_id = "", name = "확인", type = "", disabled = false, fn = () => {} },
  style = {},
}) => {
  return (
    <Button
      data-testid={test_id}
      type={type}
      disabled={disabled}
      onClick={(e) => {
        if (type !== "submit") {
          e.preventDefault();
          fn(e);
        }
      }}
    >
      {name}
    </Button>
  );
};

export default BtnComponent;
