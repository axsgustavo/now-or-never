import { Container, ViewColor } from "./styles";

export function InputColor({ onChange, color }) {
  return (
    <Container>
      <span>Cor de definição</span>
      <input type="color" onChange={onChange} />
      <ViewColor backgroundColor={color}></ViewColor>
    </Container>
  );
}