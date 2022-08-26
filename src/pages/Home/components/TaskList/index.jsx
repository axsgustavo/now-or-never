import toast from "react-hot-toast";

import { memo } from "react";
import { useTasks } from "../../../../hooks/useTasks";

import { BsCheck } from "react-icons/bs";
import { Checkbox, Container, Table, TableRow, ViewColor } from "./styles";

function TaskList() {
  const { tasks, updateStatusTask } = useTasks();

  function handleChangeStatus(id, status) {
    updateStatusTask(id, status);
    
    if (status) {
      toast.success(`Tarefa concluida.`);
    }
  }

  return (
    <Container>
      <Table>
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
          <TableRow isActive={task.status} key={index}>
            <td>
              <ViewColor backgroundColor={task.color} />
              {task.name}
            </td>
            <td>{task.startTime}</td>
            <td>{task.endTime}</td>
            <td>
              <Checkbox>
                <input type="checkbox" onChange={(event) => handleChangeStatus(task.id, event.target.checked)} />
                <span><BsCheck size={24} /></span>
              </Checkbox>
            </td>
          </TableRow>
        ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default memo(TaskList);