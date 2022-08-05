import { Helmet } from "react-helmet";
import { useTasks } from "../../hooks/useTasks";

import { TitlePage } from "../../components/TitlePage";
import { CurrentDate } from "../../components/CurrentDate";
import { TaskList } from "./components/TaskList";
import { ButtonCreateTask } from "./components/ButtonCreateTask";

import { Container, BoxContent } from "./styles"

export function Home({ openNewTaskModal }) {
  const { tasks } = useTasks();

  return (
    <Container>
      <Helmet>
        <title>NORN | Suas tarfas</title>
      </Helmet>

      <TitlePage text="Bem vindo ao" bold="now or never" />

      <BoxContent>
        {tasks.length == 0 && (
          <p>Para se <b>organizar melhor</b> comece criando uma uma tarefa!</p>
        )}

        <ButtonCreateTask openNewTaskModal={openNewTaskModal} />
        
        {tasks.length > 0 && (
          <TaskList />
        )}
      </BoxContent>

      <CurrentDate position="center" />
    </Container>
  );
}