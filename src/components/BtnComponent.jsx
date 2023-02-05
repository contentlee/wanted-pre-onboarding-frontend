import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.style.width};
  height: 24px;
  margin: 5px;

  color: #fff;
  font-weight: 600;

  border: 1px solid ${(props) => props.style.background_color};
  border-radius: 4px;
  background-color: ${(props) => props.style.background_color};

  &:hover {
    cursor: pointer;
    filter: grayscale(40%);
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
  style = { background_color: "#5a5b7c", width: "80px" },
}) => {
  return (
    <Button
      style={style}
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
