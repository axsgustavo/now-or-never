import { useTasks } from "../../../../hooks/useTasks";

import { BsCheck } from "react-icons/bs";
import { TbTrash } from 'react-icons/tb';

import { Container } from "./styles";

export function TaskList() {
  const { tasks, deleteTask } = useTasks();

  function handleDeleteFolder(id, name) {
    deleteTask(id, name);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Tarefas</th>
            <th>Inicio</th>
            <th>Fim</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {tasks.map((task, index) => (
          index < 5 && (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.startTime}</td>
              <td>{task.endTime}</td>
              <td>
                <label>
                  <input type="checkbox" />
                  <span><BsCheck size={24} /></span>
                </label>
              </td>
            </tr>
          )
        ))}
        </tbody>
      </table>
    </Container>
  );
}