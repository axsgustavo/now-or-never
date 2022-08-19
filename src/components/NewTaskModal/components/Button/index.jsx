import { Container } from "./styles";

export function Button(props) {
  return (
    <Container 
      type="button" 
      onClick={props.onClick} 
      backgroundColor={props.backgroundColor}
      style={{
        position: props.position,
        right: props.right,
        left: props.left,
      }}
    >
        {props.children}
    </Container>
  );
}