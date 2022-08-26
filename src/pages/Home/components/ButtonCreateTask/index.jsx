import { memo } from "react";
import { useTasks } from "../../../../hooks/useTasks";

import { MdAddTask } from "react-icons/md";
import { AddButton, Container } from "./styles";

function ButtonCreateTask({ openNewTaskModal }) {
  const { tasks } = useTasks();

  return tasks.length > 0 ? (
    <AddButton type="button" onClick={() => openNewTaskModal([])}>
      <MdAddTask size={20} />
    </AddButton>
    ) : (
    <Container>
      <button
        type="button"
        onClick={() => openNewTaskModal([])}
      >
        Criar uma nova tarefa
        <span>
          <MdAddTask size={25} />
        </span>
      </button>
    </Container>
  )
}

export default memo(ButtonCreateTask);