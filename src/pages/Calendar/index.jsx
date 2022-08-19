import TaskCalendar from "rc-year-calendar";

import { Helmet } from "react-helmet";
import { useTasks } from "../../hooks/useTasks";

import { TitlePage } from "../../components/TitlePage";
import { Container } from "./styles";

import 'rc-year-calendar/locales/rc-year-calendar.pt';

export function Calendar({ openNewTaskModal }) {
  const currentYear = new Date().getFullYear();

  const { tasks, deleteTask } = useTasks();

  function handleDeleteFolder(id, name) {
    deleteTask(id, name);
  }

  return (
    <Container>
      <Helmet>
        <title>NORN | Calendario</title>
      </Helmet>
      <TitlePage text="Gerencie suas" bold="tarefas" size="1.5rem" lineHeight="1.5rem" />
      <TaskCalendar
        dataSource={tasks} 
        language="pt"
        minDate={new Date(currentYear, 0, 1)}
        enableRangeSelection={true}
        onRangeSelected={event => openNewTaskModal([event.startDate, event.endDate])}
        enableContextMenu={true}
        contextMenuItems={[
          {
            text: "Excluir",
            click: event => handleDeleteFolder(event.id, event.name),
          }
        ]}
      />
    </Container>
  );
}