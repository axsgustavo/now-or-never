import { useDrag } from "react-dnd"
import { Container, Status } from "./styles";

export function Card({ name, statusColor }) {
  const [collected, dragRef] = useDrag(() => ({
    type,
    item: {id}
  }));

  return (  
    <Container>
      <Status backgroundColor={statusColor || undefined} />
      <div>{name}</div>
    </Container>
  );
}