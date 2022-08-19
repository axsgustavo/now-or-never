import { Button } from "../Button";
import { InputTime } from "../InputTime";
import { InputColor } from "../InputColor";

import { BoxInputTime } from "./styles";

export function StepTwo({ title, startTime, setStartTime, endTime, setEndTime, color, setColor, stepControl, setStepControl, onCreateNewTask }) {
  function handlePreviousStep(event) {
    event.preventDefault();

    if (stepControl > 0) {
      setStepControl(stepControl - 1);
    }
  }

  function handleChangeColor(hex) {
    setTimeout(() => {
      setColor(hex);
    }, 800);
  }

  return (
    <>
      <h2>{title}</h2>
      <BoxInputTime>
        <InputTime title="Horario inicial" value={startTime} onChange={setStartTime} />
        <InputTime title="Horario Final" value={endTime} onChange={setEndTime} />
      </BoxInputTime>
      <InputColor onChange={event => handleChangeColor(event.target.value)} color={color} />
      <Button onClick={handlePreviousStep} backgroundColor="#333333">
        voltar  
      </Button>
      <Button onClick={onCreateNewTask} position="absolute" right="0">
        Criar nova tarefa
      </Button>
    </>
  );
}