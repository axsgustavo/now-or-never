import DateRangePicker from '@wojtekmaj/react-daterange-picker';

import { Button } from "../Button";
import { BoxDate, BoxInput } from "./styles";

export function StepOne({title, setTitle, date, setDate, stepControl, setStepControl}) {
  function handleNextStep(event) {
    event.preventDefault();

    if (stepControl < 2) {
      if (!(title.replace(/ /g, '').length > 0)) {
        return toast.error("O título deve ter pelo menos um caracter!");
      }

      if (!date) {
        return toast.error("Defina uma data para sua tarefa!");
      }

      setStepControl(stepControl + 1);
    }
  }

  return (
    <>
      <h2>Criar nova tarefa</h2>
      <BoxInput>
        <input type="text" value={title} onChange={setTitle} required />
        <span>Nome da tarefa</span>
      </BoxInput>
      <BoxDate>
        <DateRangePicker
          onChange={setDate}
          value={date}
        />
      </BoxDate>
      <Button onClick={handleNextStep}>Proximo</Button>
    </>
  );
}