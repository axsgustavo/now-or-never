import { BiFolderPlus } from "react-icons/bi";

import { Container } from "./styles";

export function ButtonCreateTask({ openNewTaskModal }) {
  return (
    <Container>
      <button
        type="button"
        onClick={openNewTaskModal}
      >
        Criar uma nova tarefa
        <span>
          <BiFolderPlus size={30} />
        </span>
      </button>
    </Container>
  );
}