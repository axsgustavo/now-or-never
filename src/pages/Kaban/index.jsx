import { Helmet } from "react-helmet";

import { useTasks } from "../../hooks/useTasks";
import { Card } from "./components/Card";

import { Board, Container, Dropzone } from "./styles";

export function Kanban({ openNewTaskModal }) {
  const { tasks } = useTasks();

  return (
    <Container>
      <Helmet>
        <title>NORN | Kaban</title>
      </Helmet>

      <Board>
        <h3>Fazer</h3>
        <Dropzone>
          <Card name="aaaa" />
        </Dropzone>
      </Board>
      <Board>
        <h3>Fazendo</h3>
        <Dropzone>
          {/* <Card name="aaaa" /> */}
        </Dropzone>
      </Board>
      <Board>
        <h3>Finalizado</h3>
        <Dropzone>
        </Dropzone>
      </Board>
    </Container>
  );
}